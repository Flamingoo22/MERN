import React, { useContext } from 'react'
import { Context } from './Wrapper'

const Form = (props) => {
    const { name, setName } = useContext( Context )
    return (
        <fieldset>
            <legend>Form</legend>
            <input onChange={e=>setName(e.target.value)} value={name}/>
        </fieldset>
    )
}

export default Form