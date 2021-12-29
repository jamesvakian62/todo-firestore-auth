import React from 'react'
import "../styles/Login.css";
import { Link } from 'react-router-dom';

function Home() {
    return (

   <>       
        <div className='logout'>
            <h1>home page</h1>


            <Link to="/home"> Log back in </Link>

       
            
           
        </div>                   

   
</> 

)
}


export default Home