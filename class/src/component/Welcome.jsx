
import React, { Component } from "react";

class Welcome extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
      bnttext: 'click'
    }
  }  

  render(){
    return(
    <>
      <h1>hello, from class based component {this.props.name}</h1>
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={()=> this.setState({count : this.state.count+1, bnttext: "pammi"})}>{this.state.bnttext}</button>
      </div>
    </> 
    )
  }
}

export default Welcome