import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'


const CreatePage = (props) => {
    // const nav = useNavigate();
    // const [errors, setErrors] = useState([]); //dont over lifting state

    //if majority of the funcitionality are same, the differences can be pass by props
    // const createAuthor = (author) => {
    //     axios.post('http://localhost:8000/api/authors', author)
    //         .then(res=>{
    //             console.log(res.data);
    //             nav('/')
    //         })
    //         .catch(err=> {
    //                 // console.log(err.response.data.errors.name.message)
    //                 const errResponse = err.response.data.errors;
    //                 // console.log(errResponse)
    //                 const errArray = [];
    //                 for (const key of Object.keys(errResponse)){
    //                     errArray.push(errResponse[key].message)
    //                 };
    //                 console.log('error from db:',errArray)
    //                 setErrors(errArray);
    //         })
    // }


    return (
        <div>
            <Navbar message='Add a new author: ' home={false} />
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Form 
                    method='post'
                    path='authors'
                    name=''/>
                </Paper>
            </Grid>
        </div>
    )
}

export default CreatePage