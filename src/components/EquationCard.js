import React, {Component} from 'react';
import ButtonsCard from './ButtonsCard';
import ResultCard from './ResultCard';

class EquationCard extends Component{
  
  
  render(){
    const {value1, value2, value3, numQuestions, numCorrect, proposedAnswer}=this.props.stateObj;
    const {validateFalseBtn,validateTrueBtn}=this.props;
    return (
      	<div>
          <div className="equation">
          	<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
			<ButtonsCard validateTrueBtn={validateTrueBtn} validateFalseBtn={validateFalseBtn} />
			<ResultCard numQuestions={numQuestions} numCorrect={numCorrect} />
		</div>
    );
    
  }
  
  
}

export default EquationCard;