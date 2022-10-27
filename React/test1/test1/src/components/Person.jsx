import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            myPerson: this.props.person //pass object
        }
    }

    increaseNum=()=>{
        console.log('click')
        this.setState({
            myPerson:{
                ...this.state.myPerson,
                age:this.state.myPerson.age+=1
            }
        })
    }

    render() {
        return (
        <fieldset>
            <legend>Person.jsx</legend>
            <p>
                state:{JSON.stringify(this.state.myPerson)}<br/>
                props:{JSON.stringify(this.props.person)}
            </p>
            <p>
                Person from props: {this.props.person.name}
                <br/>
                Person from props: {this.props.person.age}
            </p>
            <p>
                Person from state: {this.state.myPerson.name}
                <br/>
                Person from state: {this.state.myPerson.age}
            </p>
            <button onClick={()=>{this.increaseNum()}}>click me</button>
        </fieldset>
        )
    }
}
