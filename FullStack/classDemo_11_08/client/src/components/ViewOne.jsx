import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import noteStyle from './Main.module.css'

const ViewOne = () => {
    const { id } = useParams();
    const [ oneNote, setOneNote ] = useState({})
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/notes/'+id)
            .then(res => {
                console.log(res.data);
                setOneNote(res.data)
            })
            .catch(err=>console.log(err))
    },[id])

    return (              
        <div key={oneNote._id} className={noteStyle.note}>
            <h5>{oneNote.isImportant ? '*' : ''}{oneNote.title}</h5>
            <p>
                {oneNote.content}
            </p>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}

export default ViewOne