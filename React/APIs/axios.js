/*
npm install axios
*/

import axios from 'axios';
// ...
axios.get('http://www.example.com').then(response=>{
    console.log(response);
})


import React, { useEffect, useState } from 'react';
import axios from 'axios';
// ...
const someComponent = props => {
    //Note the second argument is an empty array.
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []); 
    return(
        <div>
            {responseData}
        </div>
    )
}