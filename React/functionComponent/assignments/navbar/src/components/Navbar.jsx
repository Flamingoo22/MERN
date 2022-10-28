import React, {useContext} from 'react'
import { Context } from './Wrapper'

const Navbar = (props) => {
    const { name } = useContext(Context)

    return (
        <fieldset>
            <p className='navbar'>Hi {name}</p>
            <legend>Navbar</legend>
            
        </fieldset>
    )
}

export default Navbar