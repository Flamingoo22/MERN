import React, { useState } from 'react' //rafce = react arrow function 

const FunctionalComponent = (props) => {
    //const { person, num } = props

    //create state
    const [num, setNum] = useState(props.num);
    const [person, setPerson] = useState(props.person);

    const increaseNum =() =>{
        setNum(num+1);
    }

    return (
        <fieldset>
            <legend>FunctionalComponent</legend>
            <div>FunctionalComponent</div>
            <div>
                {JSON.stringify(person)}<br/>
                <p onClick={()=>increaseNum()}>{num}</p>
            </div>
        </fieldset>
    )
}

//this inside the function are referring to the file
export default FunctionalComponent