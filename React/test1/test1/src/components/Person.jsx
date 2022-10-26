import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            myPerson: this.props.person
        }
    }
    render() {
        return (
        <fieldset>
            <legend>Person.jsx</legend>
            <p>
                Person from props: {this.props.person.name}
            </p>
            <p>
                Person from State: {this.state.myPerson.name}
            </p>
        </fieldset>
        )
    }
}
