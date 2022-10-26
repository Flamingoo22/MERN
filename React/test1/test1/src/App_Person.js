import React from 'react'
import Person from './components/Person'
import OtherComponent from './components/OtherComponent'

function App_Person(){

    const person = {
        name: 'Bob',
        favFoo: 'ramen',
        age: 45
    }

    return (
    <fieldset>
        <legend>App_Person.js</legend>
        <Person person={person}/>
        <OtherComponent alice={10} />
    </fieldset>
    )
}

export default App_Person;
