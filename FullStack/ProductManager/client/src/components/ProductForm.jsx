import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ProductForm = (props) => {

    const {products, setProducts} = props
    
    const [input, setInput] = useState({
        title:'',
        price:'',
        desc:''
    });

    const navigate  = useNavigate();

    const { id } = useParams();

    const onSubmitHandler = e =>{
        e.preventDefault();
        // pass in the methods as props to make the function more dynmaic
        if(!id){
            axios.post('http://localhost:8000/products/new', {
                title:input.title,
                price:input.price,
                desc:input.desc
            }) 
                .then(res =>setProducts([...products, res.data]))
                .catch(err=> console.log(err))
            }
        else{
            axios.put(`http://localhost:8000/${id}`, {
                title:input.title,
                price:input.price,
                desc:input.desc
            }) 
                .then(res => console.log(res))
                .catch(err=> console.log(err))
            navigate(`/`)
            }
        setInput({
            title:'',
            price:'',
            desc:''
        });
    }

    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:8000/${id}`)
            .then ( res => {
                setInput(res.data);
            })
            .catch(err => console.log(err))
        }
    },[])

    const onChangeHandler = e =>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const onDeleteHandler = e =>{
        axios.delete(`http://localhost:8000/${id}`)
        navigate('/')
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" value={input.title} onChange={onChangeHandler} name='title'/>
            </p>
            <p>
                <label>Price</label>
                <input type="number" value={input.price ? input.price :''} onChange={onChangeHandler} name='price'/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" value={input.desc} onChange={onChangeHandler} name='desc'/>
            </p>
            {id?
                <>
                    <input type="submit" value='Update'/>
                    <Link to={'/'}>Back</Link>
                    <button onClick={onDeleteHandler}>Delete</button>
                </>
                :
                <input type="submit" value='Create'/>
            }
            {/* <p>{JSON.stringify(input)}</p> */}
        </form>
    )
}

export default ProductForm