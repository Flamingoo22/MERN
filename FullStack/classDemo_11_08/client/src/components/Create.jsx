import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {
    const nav = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isImportant, setIsImportant] = useState(false)

    const createNote = (e) =>{
        e.preventDefault();
        console.log(title, content, isImportant);
        axios.post('http://localhost:8000/api/notes', {title, content, isImportant})
            .then(res => {
                console.log('success')
                console.log(res.data)
                nav(-1);
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <form onSubmit={createNote}>
                title: <input onChange={e =>setTitle(e.target.value)}/><br/>
                content: <input onChange={e=> setContent(e.target.value)}/><br/>
                important: <input type='checkbox' onChange={e=>setIsImportant(e.target.checked)} checked={isImportant}/><br/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create