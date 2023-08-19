import React, { Component } from 'react';
import Calci from './Calci'; 
import calculatorImage from './Calculator.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: null,
      calci: new Calci(), 
      calOutput: { result: 0, operation: '' },
    };
  }

  handleOptionChange = (option) => {
    this.setState({ option });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
   
    this.setState((prevState) => ({
      calci: {
        ...prevState.calci,
        state: {
          ...prevState.calci.state,
          [name]: parseFloat(value),
        },
      },
    }));
  };

  handleCalculate = () => {
    const { option, calci } = this.state;
    let operationName = '';
    let calOutput = { result: 0, operation: '' };

    switch (option) {
      case 1:
        operationName = 'Addition';
        calci.addition();
        calOutput = { ...calci.state, operation: operationName , result: calci.state.parm1 + calci.state.parm2};
        break;
      case 2:
        operationName = 'Subtraction';
        calci.subtraction();
        calOutput = { ...calci.state, operation: operationName , result: calci.state.parm1 - calci.state.parm2 };
        break;
      case 3:
        operationName = 'Multiplication';
        calci.multiplication();
        calOutput = { ...calci.state, operation: operationName , result: calci.state.parm1 * calci.state.parm2};
        break;
      case 4:
        operationName = 'Division';
        calci.division();
        calOutput = { ...calci.state, operation: operationName , result: calci.state.parm1 / calci.state.parm2};
        break;
      case 5:
        operationName = 'Modulus';
        calci.modulus(); 
        calOutput = { ...calci.state, operation: operationName , result: calci.state.parm1 % calci.state.parm2};
        break;
      default:
        return;
    }

    this.setState({ calOutput });
  };

  render() {
    const { option, calOutput } = this.state;
    
    return (
      <div className="App">
         <h1 className="App-title">Calculator</h1>
        <img src={calculatorImage} alt="Calculator"/>
        {option === null ? (
          <div>
            <h3>Choose an operation</h3>
            <button onClick={() => this.handleOptionChange(1)}>Addition</button> <br />
            <button onClick={() => this.handleOptionChange(2)}>Subtraction</button>   <br />
            <button onClick={() => this.handleOptionChange(3)}>Multiplication</button> <br />
            <button onClick={() => this.handleOptionChange(4)}>Division</button>  <br />
            <button onClick={() => this.handleOptionChange(5)}>Modulus</button> <br />
          </div>
        ) : (
          <div>
            <label>Enter Parm1</label>
            <input type="number" name="parm1" onChange={this.handleInputChange} />
            <label>Enter Parm2</label>
            <input type="number" name="parm2" onChange={this.handleInputChange} />
            <button onClick={this.handleCalculate}>Calculate</button> <br />
            Parm1: {this.state.calci.state.parm1} <br />
            Parm2: {this.state.calci.state.parm2} <br />
            Result: {calOutput.result} <br />
            Operation: {calOutput.operation} <br />
            <button onClick={() => this.handleOptionChange(null)}>Back</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
