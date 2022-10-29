import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=807&offset=0';

const AxiosPokemonApi = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState(false)

    const getResult =(data)=>{
        const result = [];
        data.map((pokemon)=>{
            result.push(pokemon.name)
        })
        setPokemons(result)
    }

    const showPokemon = () =>{
        setShow(!show)
    }

    useEffect(()=>{
        axios.get(API_URL)
            .then(response => {getResult(response.data.results)})
    },[])

    return (
        <>
            <button onClick={()=>showPokemon()}>Fetch Pokemon</button>
            {
            show?
                <ul>
                    {pokemons.map((pokemon, indx)=>{
                        return<li key={indx}>{pokemon}</li>
                    })}
                </ul>
            : ''
            }
        </>
    )
}

export default AxiosPokemonApi