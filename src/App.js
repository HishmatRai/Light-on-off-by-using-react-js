
import React, { Component } from 'react';
import './App.css';
import lightOff from './images/of.jpg'
import lightOn from './images/on.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      light : false,
      
    }
  }

  render() {
    const { light } = this.state;
    console.log(light)
    return (
      <div className="App">
        <center>

        <h1>Light On Off</h1>
        
    <img src={this.state.light ? lightOn : lightOff} width="300px"/>
    <br/>
    <button onClick={()=>this.setState({light : !this.state.light})}>
    {this.state.light ? "Light Off" : "Light On"}
      </button>
        </center>
      </div>
      
    )
  }
}

export default App;