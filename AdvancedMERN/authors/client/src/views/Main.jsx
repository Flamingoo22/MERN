import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AuthorTable from '../components/AuthorTable';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'

const Main = (props) => {
    const [ authors, setAuthors ] = useState([]) //


    const deleteHandler = (id) =>{
        axios.delete('http://localhost:8000/api/authors/'+ id)
            .then(res=> {
                setAuthors(authors.filter( author => author._id !== res.data._id))
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar message='We have quotes by: ' home={true} />
            <Container maxWidth="xs">
                <AuthorTable authors= {authors} deleteHandler={deleteHandler} />
                {/* {  JSON.stringify({authors})    }
                */}
            </Container>
        </div>
    )
}

export default Main