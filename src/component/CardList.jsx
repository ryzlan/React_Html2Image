import React, { Component } from 'react';

import OptionsList from './OptionsList';

class CardList extends Component {
    state = {  }
    render() { 
         const {id ,question } = this.props.data.question ;
         
        return (
            <div className="card-wrapper" id={id} ref={id}>
              <div className="cards" >
                <div className="card-body question">
                    <p className="card-text questions">
                    {question}
                    </p>
                </div>
                <OptionsList  answers={this.props.data.answers}/>
              </div>
              <div>
                <img className="logo" src={require('../img/logo.png')} alt="logo" />
              </div>
              
          </div>
        );
    }
}
 
export default CardList;