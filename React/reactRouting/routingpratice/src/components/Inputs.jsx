import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Word = (props) => {
    // const { input } = props
    const [ isNum, setIsNum ] = useState(false)
    const { input, bcolor, tcolor } = useParams();

    const checkInput = () =>{
        if(isNaN(input)){
            setIsNum(!isNum)
        }
    }

    useEffect(()=>{
        console.log(input, bcolor, tcolor)
        checkInput(input)
    },[])

    return (
        <>
            {isNum?
                <div style={{backgroundColor:bcolor}}>The word is : {input}</div>
                :
                <div style={{backgroundColor:bcolor, color:tcolor}}>The number is : {input}</div>
            }
        </>
    )
}

export default Word