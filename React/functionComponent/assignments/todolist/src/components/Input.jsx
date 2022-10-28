import React, { useState } from "react";

const Input = (props) =>{
    const[ inputs , setInputs ] = useState('');

    return (
        <form onSubmit={e=>props.addList(e, inputs)}>
            <input onChange={ e => setInputs(e.target.value)} ref={props.inputRef}/>
            <input type='submit'/>
        </form>
    )
}

export default Input;