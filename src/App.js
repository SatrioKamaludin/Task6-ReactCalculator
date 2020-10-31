import React, { Component } from 'react';
import './App.css';
import KeypadComponent from './Keypad';
import ResultComponent from './Result';

//referred from original code: https://medium.com/@nitinpatel_20236/how-to-build-a-simple-calculator-application-with-react-js-bc10a4568bbd

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if(button === "=") {
            this.calculate()
        } else if(button === "C") {
            this.reset()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    }

    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')) {
        checkResult = this.state.result.replace('--','+')
        } else {
            checkResult = this.state.result
        } try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeypadComponent onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}

export default App;