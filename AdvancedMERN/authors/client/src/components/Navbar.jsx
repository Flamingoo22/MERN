import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Navbar = (props) => {
    const { home, message } = props
    return (
        <div>            
            <h1>Favorite authors</h1>
            <Button variant="text">
                {home && <Link to={'/new'}>Add an author</Link>}
                {!home && <Link to={'/'}>Home</Link>}
            </Button>
            <p>{message}</p>
        </div>
    )
}

export default Navbar