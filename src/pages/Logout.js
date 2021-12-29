import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Login.css";


function Logout() {
    return (
        <div className='logout' style={{backgroundColor:'red'}}>
            <h1>Logged out  </h1>
             <Link to="/home"> Log back in </Link>
        </div>                   
    )
}

export default Logout
