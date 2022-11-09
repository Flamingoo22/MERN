import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const nav = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isImportant, setIsImportant] = useState(false)
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/notes/'+id)
            .then(res => {
                // console.log(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setIsImportant(res.data.isImportant)
            })
            .catch(err=>console.log(err))
    },[id])

    const updateNote =(e) =>{
        e.preventDefault();
        // console.log(title, content, isImportant);
        axios.put('http://localhost:8000/api/notes/'+id, {title, content, isImportant})
            .then(res => {
                // console.log('success')
                // console.log(res.data)
                nav(-1);
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
        <form onSubmit={updateNote}>
            title: <input onChange={e =>setTitle(e.target.value)} value={title}/><br/>
            content: <input onChange={e=> setContent(e.target.value)} value={content}/><br/>
            important: <input type='checkbox' onChange={e=>setIsImportant(e.target.checked)} checked={isImportant}/><br/>
            <button>submit</button>
        </form>
    </div>
    )
}

export default Update