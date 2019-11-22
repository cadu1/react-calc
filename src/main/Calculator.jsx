import React, {Component} from 'react'

import './Calculator.css'
import Button from '../components/buttons/Button'
import Display from '../components/display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = {...initialState}
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({displayValue, clearDisplay: false})

        if (digit !== '.') {
            const index = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[index] = newValue
            this.setState({values})
            console.log(values)
        }
    }
    render() {
        return(
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button click={this.clearMemory} class='triple' label='AC'></Button>
                <Button click={this.setOperation} label='/'></Button>
                <Button click={this.addDigit} label='7'></Button>
                <Button click={this.addDigit} label='8'></Button>
                <Button click={this.addDigit} label='9'></Button>
                <Button click={this.setOperation} label='*'></Button>
                <Button click={this.addDigit} label='4'></Button>
                <Button click={this.addDigit} label='5'></Button>
                <Button click={this.addDigit} label='6'></Button>
                <Button click={this.setOperation} label='-'></Button>
                <Button click={this.addDigit} label='1'></Button>
                <Button click={this.addDigit} label='2'></Button>
                <Button click={this.addDigit} label='3'></Button>
                <Button click={this.setOperation} label='+'></Button>
                <Button click={this.addDigit} class='double' label='0'></Button>
                <Button click={this.addDigit} label='.'></Button>
                <Button click={this.setOperation} label='='></Button>
            </div>
        )
    }
}