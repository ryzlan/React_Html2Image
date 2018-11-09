import React, { Component } from 'react';

class OptionsList extends Component {
    state = {  }

    CreateOptionsList=(option)=>{
        const {id , answer } = option ;
        return (
            <li key={id} className="">
                <p className="option">
                   <span>{answer}</span> 
                </p>
                
            </li>
        )
    }
    render() { 

        const renderOptionsList = this.props.answers.map(this.CreateOptionsList)
        return (
         <ul className="options">
            {renderOptionsList}
        </ul>
      );
    }
}
 
export default OptionsList;