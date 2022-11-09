import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import noteStyle from './Main.module.css'

const Main = () => {
    const nav = useNavigate()
    const [ notes, setNotes ] = useState([])


    //trigger when the component has finished loading
    useEffect(()=>{
        //get all the notes from the server
        axios.get('http://localhost:8000/api/notes')
            .then(res=>{
                // console.log(res.data)
                setNotes(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    //go to the update route
    const goToUpdate =(id) =>{
        nav(`/notes/${id}/edit`)
    }

    const deleteNote =(id)=>{
        if(window.confirm('Really?')){
            axios.delete('http://localhost:8000/api/notes/'+id)
            .then(res=>{
                console.log(res.data)
                setNotes(notes.filter((note)=>note._id!== id))
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            {
                notes.map((oneNote) => {
                    return (
                        <div key={oneNote._id} className={noteStyle.note}>
                            <Link to={'/notes/'+oneNote._id}>
                                <h5>{oneNote.isImportant ? '*' : ''}{oneNote.title}</h5>
                            </Link>
                            <p>
                                {oneNote.content}
                            </p>
                            <button onClick={()=>{goToUpdate(oneNote._id)}}>edit</button>
                            <button onClick={()=>{deleteNote(oneNote._id)}}>delete</button>
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Main