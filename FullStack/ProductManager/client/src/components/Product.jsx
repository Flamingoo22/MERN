import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Product = () => {
    const [ product, setProduct ] = useState({})
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/${id}`)
        .then ( res => {
            // console.log(res)
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={'/'}>Back</Link>
        </div>
    )
}

export default Product