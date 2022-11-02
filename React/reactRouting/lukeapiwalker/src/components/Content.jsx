import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import typeMap from './typeMap.json'
import { useParams } from 'react-router-dom';

const API_URL = 'https://swapi.dev/api/'

const Content = (props) => {
    // const { url } = props
    const [ApiData, setApiData] = useState([]) //
    const { type, id } = useParams();
    const navigate = useNavigate();

    const url = API_URL + type + '/' + id;    //

    const SearchApiData = async() =>{
        setApiData([])
        try {
            const res = await axios.get(url)
            // const keys = (Object.keys(res.data))      //built in methods to return keys
            // const values = (Object.values(res.data))  //built in methods to return values
            //const entries = (Object.entries(res.data))   //Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
            let homeworld;
            try {
                homeworld = await axios.get(res.data.homeworld)
                const data = res.data;
                data['Home World'] = homeworld.data.name;
                setApiData(data);
            } catch {}
            setApiData(res.data)   //why does this works if i put in after the try.... event loop?
        } catch (err){
            navigate('/404');  //still return 404 in the console
        }
    }

    const titlize = (string) =>{
        const str = string.replace('_'," ")
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;
    }
    
    useEffect(() =>{
        SearchApiData();  //this function doesn't finish before page render? is it becuase of the setter function?
    },[url])

    return (
        // <div>
        //     {ApiData ?
        //     ApiData.filter((item, idx) => idx < 7).map((value, index)=>{
        //         return value[0] == 'name'? <h1 key={index}>{value[1]}</h1> : <p key={index}>{value[0]} : {value[1]}</p>
        //     })
        //     :
        //         <h2>Loading</h2>
        //     }
        //</div>
        // above is the first attempt, works but the following display only the data that we want to show;
        <div>
            {Object.keys(ApiData).length > 0?
                <>
                    <h1>{ApiData['name']}</h1>
                    {typeMap[type].map((value, index) =>{
                        return <p key={index}>{titlize(value)}: {ApiData[value]}</p>
                    })}
                    {type === 'people' ? <p>Know More About : <a href={ApiData['homeworld']}>{ApiData['Home World']}</a></p> : <></>}
                    Length: {ApiData.length}
                </>
                :
                <h1>Loading</h1>
                }
        </div>
    )
}

export default Content