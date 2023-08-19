import React, { Component } from 'react';
import CalciInput from './CalciInput'; 
import CalciOutput from './CalciOutput'; 

class Calci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parm1: 0,
      parm2: 0,
      result: 0,
      operation: '',
    };
  }

  handleParmChange = (parm, value) => {
    this.setState({ [parm]: value });
  }

  addition = () => {
    const sum = this.state.parm1 + this.state.parm2;
    this.setState({
      result: sum,
      operation: 'Addition',
    });
    return sum; 
  }

  subtraction = () => {
    const diff = this.state.parm1 - this.state.parm2;
    this.setState({
      result: diff,
      operation: 'Subtraction',
    });
    return diff;
  }

  multiplication = () => {
    const prod = this.state.parm1 * this.state.parm2;
    this.setState({
      result: prod,
      operation: 'Multiplication',
    });
    return prod;
  }

  division = () => {
    const div = this.state.parm1 / this.state.parm2;
    this.setState({
      result: div,
      operation: 'Division',
    });
    return div;
  }

  modulus = () => {
    const mod = this.state.parm1 % this.state.parm2;
    this.setState({
      result: mod,
      operation: 'Modulus',
    });
    return mod;
  }

  render() {
    const { parm1, parm2, result, operation } = this.state;

    return (
      <div>
        <CalciInput
          parm1={parm1}
          parm2={parm2}
          onParmChange={this.handleParmChange}
        />
        <button onClick={this.addition}>Add</button>
        <button onClick={this.subtraction}>Subtract</button>
        <button onClick={this.multiplication}>Multiply</button>
        <button onClick={this.division}>Divide</button>
        <button onClick={this.modulus}>Modulus</button>
        <CalciOutput result={result} operation={operation} />
      </div>
    );
  }
}

export default Calci;
