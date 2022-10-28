import React, { useState, createContext } from 'react'
import Navbar from './Navbar'
import FormWrapper from './FormWrapper'

export const Context = createContext(null);

const Wrapper = (props) => {
    const[name, setName] = useState('');

    return (
        <Context.Provider value={{name, setName}}>
            <fieldset>
                <legend>Wrapper</legend>
                {props.children}
            </fieldset>
        </Context.Provider>
    )
}

export default Wrapper