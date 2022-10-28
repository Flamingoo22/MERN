import React, { useEffect, useState } from "react";
//npm install axios
import axios from 'axios';

function EffectTutorial(){
    const [data, setData] = useState('')

    useEffect(() =>{
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then((response) =>{
                    setData(response.data[0].email);
                    console.log(response.data);
            });
    }, []); //what does [] do?

    return (
        <div>
            <h1>Hello World</h1>
            <p>{data}</p>
        </div>
    )
}