import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EquationCard from './components/EquationCard';


class App extends Component {
  
  //Function to generate random numbers
  genRandomNumber=()=>{
    return (Math.floor(Math.random() * 100));
  }

  //Function to solve equation and return result
  computeEquation=(val1,val2,val3)=>{
    return (Math.floor(Math.random() * 3) +( val1 + val2 + val3));
  }

  //initializing random numbers and storing in equation  vairables
  value1=this.genRandomNumber();
  value2=this.genRandomNumber();
  value3=this.genRandomNumber();

  //Solving equation to display result
  proposedAnswer=this.computeEquation(this.value1,this.value2,this.value3);

  //Initializing Componenet State
  state={
    value1: this.value1,
    value2: this.value2,
	value3: this.value3,
    proposedAnswer:  this.proposedAnswer,
    numQuestions: 0,
    numCorrect: 0
  }

  //Function to Determine Score/Point if user clicked the TRUE button
  validateTrue=()=>{

    this.setState((currentState)=>{
      let value1=currentState.value1;
      let value2=currentState.value2;
      let value3=currentState.value3;
      let proposedAnswer=currentState.proposedAnswer;
      let numQuestions, numCorrect;
      if((value1+value2+value3) === proposedAnswer){
        numQuestions=currentState.numQuestions+1;
        numCorrect=currentState.numCorrect+1;
      }else{
        numQuestions=currentState.numQuestions+1
        numCorrect=currentState.numCorrect;
      }
      value1= this.genRandomNumber();
      value2= this.genRandomNumber();
      value3= this.genRandomNumber();
      proposedAnswer=this.computeEquation(value1,value2,value3);

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

  //Function to Determine Score/Point if user clicked the FALSE button
  validateFalse=()=>{
    this.setState((currentState)=>{
  	   let value1=currentState.value1;
       let value2=currentState.value2;
       let value3=currentState.value3;
       let proposedAnswer=currentState.proposedAnswer;
       let numQuestions, numCorrect;
       if((value1+value2+value3)!==proposedAnswer){
          numQuestions=currentState.numQuestions+1;
          numCorrect=currentState.numCorrect+1;
        }else{
          numQuestions=currentState.numQuestions+1
          numCorrect=currentState.numCorrect;
        }

      value1= this.genRandomNumber();
      value2= this.genRandomNumber();
      value3= this.genRandomNumber();
      proposedAnswer=this.computeEquation(value1,value2,value3);
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
            <EquationCard stateObj={this.state} validateTrueBtn={this.validateTrue} validateFalseBtn={this.validateFalse}  />

        </div>
      </div>
  	);
  }
}

export default App;
