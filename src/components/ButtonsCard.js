import React, {Component} from 'react';

class ButtonsCard extends Component{
  
  render(){
    const {validateTrueBtn, validateFalseBtn}=this.props;
    return (
    	<div>
          <button onClick={()=>validateTrueBtn()}>True</button>
          <button onClick={()=>validateFalseBtn()}>False</button>
         </div>
    );
    
    
  }
  
  
}

export default ButtonsCard;