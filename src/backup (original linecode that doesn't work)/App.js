// import react
import React, { Component } from "react";
import './script';
import './App.css';

// create class
class App extends Component {
  constructor(){
  super();
  
  }

  // render method() must
  render() {
    return (
      <div className="Calculator">
        <input type="text" className="display" disabled></input>
        <div className="keyes">
          <div className="row">
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
            <button value="+" className="operator">+</button>
          </div>
          <div className="row">
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
            <button value="-" className="operator">-</button>
          </div>
          <div className="row">
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button value="*" className="operator">*</button>
          </div>
          <div className="row">
            <button value="C" className="operator">C</button>
            <button value="0">0</button>
            <button value="/" className="operator">/</button>
            <button value="=" className="operator">=</button>
          </div>
        </div>
      </div>
    );
  }
}

// export class
export default App;