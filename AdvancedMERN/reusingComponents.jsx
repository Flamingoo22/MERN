// components/PersonForm.js

import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input 
                    type="text" 
                    name="firstName" value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}


// views/Main.js

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
// export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res =>{ 
                setPeople(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    const createPerson = person => {
        axios.post('http://localhost:8000/api/person', person)
            .then(res=>{
                setPeople([...people, res.data]);
            })
    }
    return (
        <div>
           <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
           <hr/>
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
// }


// views/Update.js

// ...
const { id } = props;
const [person, setPerson] = useState();
// const [loaded, setLoaded] = useState(false);
useEffect(() => {
    axios.get('http://localhost:8000/api/person/' + id)
        .then(res => {
            setPerson(res.data);
            setLoaded(true);
        })
}, [])
const updatePerson = person => {
    axios.put('http://localhost:8000/api/person/' + id, person)
        .then(res => console.log(res));
}
// ...
//In our return
{loaded && (
    <PersonForm
        onSubmitProp={updatePerson}
        initialFirstName={person.firstName}
        initialLastName={person.lastName}
    />
)}