import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import Navbar from '../components/Navbar'



const UpdatePage = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const [errors, setErrors] = useState([])
    const [author, setAuthor] = useState({})
    const updateAuthor = (newAuthor) => {
        axios.put('http://localhost:8000/api/authors/'+id, newAuthor)
            .then(res => {
                // console.log(res.data)
                nav('/')
            })
            .catch(err=> {
                // console.log(err.response.data.errors.name.message)
                const errResponse = err.response.data.errors;
                // console.log(errResponse)
                const errArray = [];
                for (const key of Object.keys(errResponse)){
                    errArray.push(errResponse[key].message)
                };
                console.log('error from db:',errArray)
                setErrors(errArray);
        })
    }

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors/'+id)
            .then(res => {
                // console.log(res)
                setAuthor(res.data)
            })
            .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            {/* {JSON.stringify(author)} */}
            {/* {JSON.stringify(errors)} */}
            <Navbar message='Edit this author: ' home={false} />
            { author.name && <Form name={author.name} onSubmitProp={updateAuthor} errors={errors}/> }
            {/* conversion to boolean is different than truthy/falsey value */}
        </div>
    )
}

export default UpdatePage