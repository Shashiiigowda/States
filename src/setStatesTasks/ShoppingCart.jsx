import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         items:[]
      }
    }
    addItem = () =>{
        const newItem = {
            name: `Item ${this.state.items.length +1}`,
            price: Math.floor(Math.random()*100)+1,
            quantity:1  
        }
        this.setState({
            items:[...this.state.items, newItem]
        })
    }
    updateItem = (index,quantity) =>{
        const updatedItems =[...this.state.items]
        updatedItems[index].quantity = quantity
        this.setState({
            items: updatedItems
        })
    }
    removeItem = (index) =>{
       const updatedItems =[...this.state.items]
       updatedItems.splice(index,1)
       this.setState({
            items: updatedItems
       })
    }
    calculatedPrice = () =>{
        return this.state.items.reduce((total,item)=>
        total+item.price*item.quantity,0
        ).toFixed(2)
    }
  render() {
    return (
      <div className='container mt-3'>
        <h2>Shopping Cart</h2>
        <button className='btn btn-primary mb-3' onClick={this.addItem}>Add Item</button>
        {this.state.items.length >0 ?(
            <ul className='list-group'>
                {this.state.items.map((item,index) =>(
                    <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                        {item.name} - {item.price} 
                        <input
                            type='number'
                            value={item.quantity}
                            min='1'
                            className='ml-2'
                            onChange={(e)=>this.updateItem(index,parseInt(e.target.value))}></input>
                            <button className='btn btn-danger btn-sm ml-3' onClick={()=>this.removeItem(index)}>Remove</button>
                    </li>
                ))
                }
            </ul>
        ):<p>No Items in cart</p>
        }
        <h4 className='mt-3'>Total: ${this.calculatedPrice()}</h4>
      </div>
    )
  }
}
