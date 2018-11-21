import React, { Component } from 'react';

class InputFile extends Component {
    state = {  }
    


    render() { 
        return ( 
            <div className="render ">
             <h1 className="white">React HTML2Image Converter</h1>
                <input type="file" onChange={(e)=>this.props.handleChange(e)} className="inputfile" placeholder="Insert a json file"/>
            </div>
         );
    }
}
 
export default InputFile;