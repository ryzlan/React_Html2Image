import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'react-awesome-button/dist/styles.css';


import jsondata from './data/data.json';
import ShowData  from './component/ShowData';
import Loading from './component/Loading';


import domtoimage from 'dom-to-image';
import download from 'downloadjs';



class App extends Component {

  state={
    loading:false,
    flag:false,
    error:'', 
    data:[]
  }
  componentDidMount(){
    this.setState({
      data:jsondata
    })
  }

   canvasConverter=(node)=>{
    return new Promise((resolve , reject) =>{
        domtoimage.toSvg(node)
            .then(function(dataUrl){
                return resolve(dataUrl) ;
            })
            .catch(function(error){
                return reject(error);
            })
    })
}


  renderConverter=()=>{
    // this.setState({
    //   loading:true
    // })
    let arr = [];
    this.state.data.forEach(element => {
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
           var filename = "image"+i+".svg" ; 
            download(data[i] , filename);
        }

       return ;
        
    })
    .catch((err)=>{
        console.error(err);
        this.setState({
          flag:true,
          error:"Something went terribly Wrong !! "
        })

    });
    
        
  }

  render() {
    let renderError= (<div class="alert alert-danger" role="alert">
    {this.state.error}
  </div> );

    return (
      <div className="container bd">
      
      {this.state.flag ? {renderError}  : ''}
      {this.state.loading ?
      <Loading /> :

      <div className="render">
        <h1 className="white">React HTML2Image Converter</h1>
          <ShowData datas={this.state.data}  converter={this.renderConverter} />
        
          <div>
          <button type="button" className="block" onClick={this.renderConverter} >
          <span className="fa fa-download fa-3x icons"></span></button>
          </div>
        </div>
      }
        
      </div>
    );
  }
}

export default App;
