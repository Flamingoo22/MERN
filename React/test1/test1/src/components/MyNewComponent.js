import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        return (
            <div>
                We are in MyNewComponent! <br/>
                {this.props.someText}
            </div>
        );
    }
}

export default MyNewComponent;