import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-awesome-button/dist/styles.css';


import jsondata from './data/data.json';
import ShowData  from './component/ShowData';
import domtoimage from 'dom-to-image';
import download from 'downloadjs';


class App extends Component {

  state={
    flag:false,
    error:''
  }
   canvasConverter=(node)=>{
    return new Promise((resolve , reject) =>{
        
        domtoimage.toPng(node)
            .then(function(dataUrl){
                return resolve(dataUrl) ;
            })
            .catch(function(error){
                return reject(error);
            })
    })
}


  renderConverter=()=>{
    let arr = [];
    jsondata.forEach(element => {
      arr.push(element.question.id);
    });


    let nodes =[];
    arr.forEach(e =>{
      nodes.push(document.getElementById(e));
    })
 
    let promises = [];
    nodes.forEach( n =>{
        promises.push(this.canvasConverter(n));
    })
    
 

    Promise.all(promises)
    .then((data)=>{
        
        for (let i = 0; i < data.length; i++) {
           var filename = "image"+i+".png" ; 
            download(data[i] , filename);
        }
    })
    .catch((err)=>{
        console.error(err);
        this.setState({
          flag:true,
          error:"Something went terribly Wrong !! "
        })

    })
        
  }

  render() {
    return (
      <div className="container bg">
      {this.state.flag ?
           <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
            </div> : ''}

        <ShowData datas={jsondata}  converter={this.renderConverter}/>
      
        <div>
        <button type="button" className="block" onClick={this.renderConverter} >
        <span className="fa fa-download fa-3x icons"></span></button>
        </div>
        
      </div>
    );
  }
}

export default App;
