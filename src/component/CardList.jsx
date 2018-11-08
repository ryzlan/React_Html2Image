import React, { Component } from 'react';


import OptionsList from './OptionsList';

class CardList extends Component {
    state = {  }
    render() { 
         const {id ,question } = this.props.data.question ;
         
        return (
            <div className="col-6 col-md-4 row-eq-height bg-card">
            <div id={id} ref={id} className="card cards" >

            <div className="card-body question">
              <p className="card-text questions">
               {question}
              </p>
              
            </div>
            <OptionsList  answers={this.props.data.answers}/>
          </div>
          </div>
        );
    }
}
 
export default CardList;