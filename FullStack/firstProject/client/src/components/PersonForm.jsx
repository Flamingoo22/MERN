import React, { useState } from 'react'
import axios from 'axios';

const PersonForm = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/person', {
            firstName: fName,
            lastName: lName
        })
            .then(res => console.log('Response', res.data))
            .catch(err => console.log('Error', err));
    }
    return (  
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <input type="text" value={fName} onChange={e=>setFName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label>
                <input type="text" value={lName} onChange={e=>setLName(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm