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
        
        </div>  
        );
    }
}
 
export default ShowData;