import React, { Component } from 'react';

class MyNewComponent extends Component{

    //declare constructor to override our default constructor so we can initially set the state object
    constructor(props){
        //gives us all the functionality of the default constructor that comes with Component
        super(props);
        this.state = {
            message: "Welcome to the site"
        };
    }

    logout = (e) => {
        this.setState({message:"Goodbye Friend"});
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ this.logout }>Leave</button>
            </div>
        );
    }
}

export default MyNewComponent;