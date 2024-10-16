import React, { Component } from 'react'

export default class Stopwatch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         time: 0,
         running: false,
      }
      this.timer = null
    }
    start = () =>{
        if(!this.state.running){
            this.setState({
                running:true
            })
            this.timer = setInterval(() =>{
                this.setState({
                    time: this.state.time +10
                })
            },10)
        }
    }
    stop = () =>{
        clearInterval(this.timer)
        this.setState({
            running: false
        })
    }
    reset = () =>{
        clearInterval(this.timer)
        this.setState({
            running: false,
            time: 0
        })
    }

    formatTime = (time) =>{
        const minutes = String(Math.floor(time / 60000)).padStart(2,'0')
        const seconds = String(Math.floor(time % 60000)/1000).padStart(2,'0')
        const milliseconds = String(Math.floor(time % 1000)/10).padStart(2,'0')
        return`${minutes}:${seconds}:${milliseconds}`
    }
    
  render() {
    return (
      <div className='container mt-5 text-center'>
        <h2>Stopwatch</h2>
        <div className='display-4 mb-4'>{this.formatTime(this.state.time)}</div>
        <button 
            className='btn btn-success mx-2'
            onClick={this.start}
            disabled={this.state.running}>Start</button>
        <button
            className='btn btn-danger mx-2'
            onClick={this.stop}
            disabled={!this.state.running}>Stop</button>
        <button
            className='btn btn-secondary mx-2'
            onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
