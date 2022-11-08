import React, { useState, useEffect, useRef } from 'react' //useRef should not hold dynamically changed data 
import { Outlet } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import typeMap from './typeMap.json'


const API_URL = 'https://swapi.dev/api/'

const SearchBar = (props) => {
    const [list, setList] = useState([])    //to find all the options in the api
    // const { setInput } = props
    // const type = useRef(null);               //target the type
    // const id = useRef(null);                 //target the id
    const [type, setType] = useState('people')
    const [id, setId] = useState('')
    const navigate = useNavigate();
    

    // const getList = (res) => {
    //     setList(Object.keys(res.data))
    //     return res;
    // }

    // const ApiData = async() =>{
    //     const res = await axios(API_URL);     //static information; no need for api fetch
    //     await getList(res);
    // }

    const dataList = () =>{
        setList(Object.keys(typeMap));
    }

    const searchStarWar = (e) =>{
        e.preventDefault();
        navigate(`/${type}/${id}`)
    }

    useEffect(()=>{
        // ApiData();      //instead using api, use pre-set dictionary to set the select options
        dataList();         //using typeMap to populate the list
        // console.log(list) why is this returning a empty list? how to pre-populate the list before render the page
    },[])

    return (
        <div>
            <form onSubmit={e=>searchStarWar(e)}>
                <label>Search for: </label>
                <select onChange={(e)=>setType(e.target.value)} value={type}>
                {
                    list.map((data, index) =>{
                        return <option key={index} >{data}</option>
                    })
                }
                </select>
                <label > ID: </label>
                <input type='number' onChange={(e)=>setId(e.target.value)} value={id} />     {/* value={id.current.value}  is not working return null */}
                <input type='submit' value='Search'/>
            </form>
            <Outlet />
            {/* <>Type: {type}  Id: {id}</> */}
        </div>
    )
}

export default SearchBar