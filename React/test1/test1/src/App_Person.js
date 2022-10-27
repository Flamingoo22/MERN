import React from 'react'
import Person from './components/Person'
import FunctionalComponent from './components/FunctionalComponent'
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
        <FunctionalComponent person={person} num={10}/>
        <Person person={person}/>
        <OtherComponent alice={10} />
    </fieldset>
    )
}

export default App_Person;