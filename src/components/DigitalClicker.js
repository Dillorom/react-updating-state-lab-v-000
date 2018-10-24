// Code DigitalClicker Component Here
import React from 'react'
export default class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }
  handleClikc = () => {
    timeClicked + 1;
  }
  render(){
    return(
<<<<<<< HEAD
      <button onClick={this.handleClick}>
        {this.timeCliked}
      </button>
=======
      <button onClick={this.handleClick}>{this.timeCliked}</button>
>>>>>>> e79f40db5ae55ab4a4b77333cf2b3cfb16c23dd4

    )
  }
}
