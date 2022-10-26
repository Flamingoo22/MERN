import React, { Component } from 'react'

export default class OtherComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x : 1,
            name : 'bob',
            alice: this.props.alice
        }
    }

    increaseNum = () =>{
        this.setState({
            alice:this.state.alice+=1
        }, ()=>console.log(this.state.alice)) //function after the comma is a callback function : after the setState.
    }

    render() {
        return (
        <fieldset>
            <legend>OtherComponent</legend>
            <p>
                x is : {this.state.x}
            </p>
            <p>
                our state : {JSON.stringify(this.state)}
            </p>
            <p>
                state : {this.state.alice}
            </p>
            <p>
                props : {this.props.alice}
            </p>
            <hr/>
            <button onClick = {() => this.increaseNum()}>INCREASE ALICE</button>
            <hr/>
            <button onClick ={() =>{
                console.log('hello')
            }}>Hello!</button>
        </fieldset>
        )
    }
}
