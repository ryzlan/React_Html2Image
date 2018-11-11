import React, { Component } from 'react';

class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="loadsBg">
                <h1 className="loads">Loading ....</h1>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            </div>
         );
    }
}
 
export default Loading;