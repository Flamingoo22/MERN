import React, { Component } from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }

    birthdayButton = (e) =>{

        this.setState( {age: this.state.age+1})
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;
        return (
            <>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ this.birthdayButton }>Birthday Button for {firstName} {lastName}</button>
            </>
        )
    }
}

export default PersonCard;