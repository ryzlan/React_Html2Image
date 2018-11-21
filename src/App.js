import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-awesome-button/dist/styles.css';

import Main from './component/Main';
import InputFile from './component/InputFile';

import jsondata from './data/data.json';


class App extends Component {

  state={
    data:[]
  }
  componentDidMount(){
    this.setState({
      data:jsondata
    });
    
  }


  handleChange=(e)=>{
    let files = e.target.files;
    let reader = new FileReader();

    reader.readAsText(files[0]);
    reader.onload=(e)=>{
    //console.warn("data", e.target.result );
     let json = JSON.parse( e.target.result);
     console.log(json);
     this.setState({
       data:json
     }) ;

     
    }

}
   

  render() {
    

    return (
      <div className="container bd">
      
      <InputFile  handleChange={this.handleChange}/>
      <Main data={this.state.data } />
      
        
      </div>
    );
  }
}

export default App;
