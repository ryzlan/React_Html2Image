import React, { Component } from 'react';
import ShowData  from './ShowData';
import Loading from './Loading';


import domtoimage from 'dom-to-image';
import download from 'downloadjs';




class Main extends Component {
    state = { 

        loading:false,
        flag:false,
        error:'', 
        data:[]
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
        this.props.data.forEach(element => {
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
            <div>
                {this.state.flag ? {renderError}  : ''}
                {this.state.loading ?
                <Loading /> :

                <div className="render">
                    <ShowData 
                    datas={this.props.data}  
                    renderConverter={this.renderConverter} 
                    />
                </div>
                }
            </div>
          );
    }
}
 
export default Main;