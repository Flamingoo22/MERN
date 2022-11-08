import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Products = (props) => {
    // const [products, SetProducts] = useState([])
    const { products , setProducts } = props

    useEffect(()=>{
        axios.get('http://localhost:8000/products')
            .then(res =>{
                // console.log(res)
                setProducts(res.data)
            })
            .catch(err=> console.log(err))
    },[])

    return (
        <div>
            {
            products.map((product, indx) =>{
                return <p key={product._id?product._id:indx}>
                        <Link  to={`/${product._id}`}>{product.title}</Link> 
                        <button><Link to={`/${product._id}/edit`}>Edit</Link></button>
                    </p>
            })}
        </div>
    )
}

export default Products