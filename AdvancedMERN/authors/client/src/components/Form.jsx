import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack'
const Form = (props) => {
    const { name, onSubmitProp, errors } = props;
    const [ authorName, setAuthorName ] = useState('')

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        onSubmitProp({name:authorName})
    }

    useEffect(()=>{
        setAuthorName(name);
    },[name, errors])

    const nav = useNavigate();

    return (
        <Container maxWidth="sm">
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                {/* <label >Name: </label> */}
                <TextField id="outlined-basic" label="Name *" variant="outlined" value={authorName} onChange={e=> {
                    setAuthorName(e.target.value)}}/><br/>
                {/* <input type="text" value={authorName} onChange={e=> {
                    // console.log(authorName)
                setAuthorName(e.target.value)}}/> */}
                {/* <input type='submit' value='Submit'/> */}            
                <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
                >
                    <Button type='submit' variant='contained'>Submit</Button>
                    <Button variant='contained' onClick={()=>{nav(-1)}}>Cancel</Button>
                </Stack>
                {/* { JSON.stringify(authorName)}<br/>
                { JSON.stringify(name)} */}
            </form>
        </Container>
    )
}

export default Form


