import React, { Component } from 'react'

export default class AccordionComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active: null
      }
    }
    handleToggle= (index)=>{
        this.setState({
            active: this.state.active === index ? null : index
        })
    }
  render() {
    const sections =[
        {title:'Section 1',content:'Content for Section 1'},
        {title:'Section 2',content:'Content for Section 2'},
        {title:'Section 3',content:'Content for Section 3'},
    ]
    return (
      <div className='container mt-4'>
        <h2 className='mb-4'>Accordion Component</h2>
        <div class="accordion" id="accordionExample">
        {sections.map((section,index)=>(
            <div class="accordion-item" key={index}>
            <h2 class="accordion-header" 
                id={`heading${index}`}>
              <button class={`accordion-button ${this.state.active === index ? '':'collapsed'}`} 
                      type="button" 
                      onClick={()=>this.handleToggle(index)}>
                {section.title}
              </button>
            </h2>
            <div class={`accordion-collapse collapse ${this.state.active === index ? 'show':''}`}>
              <div class="accordion-body">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
  }
}
