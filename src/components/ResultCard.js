import React, {Component} from 'react';

class ResultCard extends Component{
  
  render(){
    const {numCorrect, numQuestions}=this.props;
   return (
     <div>
      	<p className="text">
          Your Score: {numCorrect}/{numQuestions}
      	</p>
	 </div>
   ); 
    
  }
  
  
}

export default ResultCard;