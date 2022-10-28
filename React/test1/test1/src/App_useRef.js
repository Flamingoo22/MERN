import React, { useRef } from "react";

function RefTutorial(props){

    const inputRef = useRef(null)

    const onClick =()=>{
        console.log(inputRef.current.value);
        inputRef.current.value= '';
        inputRef.current.focus();
    };

    return(
        <div>
            <h1>DOM</h1>
            <input type='text' placeholder='Ex...' ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}