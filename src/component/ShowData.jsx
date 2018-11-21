import React, { Component } from 'react';
import CardList from './CardList';


class ShowData extends Component {

    CreateList=(data)=>{
        return (
         <CardList key={data.question.id} data={data} />
        )
    }

    render() { 
        const renderdata = this.props.datas.map(this.CreateList);
        
        return (
        <div className="Aligner">

        {renderdata} 
       
        <div className="button_wrapper">
          <button type="button" className="block" onClick={this.props.renderConverter} >
          <span className="fa fa-download fa-3x icons"></span></button>
        </div>
        </div>  
        );
    }
}
 
export default ShowData;