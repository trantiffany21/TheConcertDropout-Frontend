import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log-in</Link>
            <Link to='/signup'>Sign-up</Link>
        </nav>
    )
}

export default Navigation