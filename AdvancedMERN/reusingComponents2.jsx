components/DeleteButton.js

import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { personId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/person/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}


// components/PersonList.js

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
    
const PersonList = (props) => {
    const [people, setPeople] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => setPeople(res.data));
    }, [])
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }
    
    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/" + person._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                        <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
// export default PersonList;


// views/Update.js

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    
    const history = useHistory()
    const { id } = useParams();
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/person/' + id, person)
            .then(res => console.log(res));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <DeleteButton personId={person._id} successCallback={() => history.push("/")} />
                </>
            )}
        </div>
    )
}
    
// export default Update;