import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
   value1=Math.floor(Math.random() * 100);
   value2=Math.floor(Math.random() * 100);
   value3=Math.floor(Math.random() * 100);
   proposedAnswer=(Math.floor(Math.random()*3) + ( this.value1 + this.value2 + this.value3));
  state={
    value1: this.value1,
    value2: this.value2,
	value3: this.value3,
    proposedAnswer:  this.proposedAnswer,
    numQuestions: 0,
    numCorrect: 0
  }

validateTrue=()=>{
  
 let value1=this.state.value1;
  let value2=this.state.value2;
  let value3=this.state.value3;
  let proposedAnswer=this.state.proposedAnswer;
  let numQuestions, numCorrect;
  this.setState((currentState)=>{
   
    if((value1+value2+value3) === proposedAnswer){
      numQuestions=currentState.numQuestions+1;
      numCorrect=currentState.numCorrect+1;
    }else{
      numQuestions=currentState.numQuestions+1
      numCorrect=currentState.numCorrect;
    }
     value1= Math.floor(Math.random() * 100);
    value2= Math.floor(Math.random() * 100);
	value3= Math.floor(Math.random() * 100);
    proposedAnswer=(Math.floor(Math.random()*3) + ( value1 + value2 + value3));
    
    return ({
      numQuestions:numQuestions,
      numCorrect:numCorrect,
      value1:value1,
      value2:value2,
      value3:value3,
      proposedAnswer:proposedAnswer,
    });
  });
  
}

validateFalse=()=>{
  
  let value1=this.state.value1;
  let value2=this.state.value2;
  let value3=this.state.value3;
  let proposedAnswer=this.state.proposedAnswer;
  let numQuestions, numCorrect;
  this.setState((currentState)=>{
    
     if((value1+value2+value3)!==proposedAnswer){
    	numQuestions=currentState.numQuestions+1;
    	numCorrect=currentState.numCorrect+1;
      }else{
		numQuestions=currentState.numQuestions+1
        numCorrect=currentState.numCorrect;
      }
    
    value1= Math.floor(Math.random() * 100);
    value2= Math.floor(Math.random() * 100);
	value3= Math.floor(Math.random() * 100);
    proposedAnswer=(Math.floor(Math.random()*3) + ( value1 + value2 + value3));
    return ({
      numQuestions:numQuestions,
      numCorrect:numCorrect,
      value1:value1,
      value2:value2,
      value3:value3,
      proposedAnswer:proposedAnswer,
    });
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.validateTrue()}>True</button>
          <button onClick={()=>this.validateFalse()}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
