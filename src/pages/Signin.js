import React, { useRef } from 'react'
import Login from '../components/Login'

function Signin() {

    // Holds two useRef
    const emailRef = useRef()
    const passwordRef = useRef()

    return (
        <div>
            <h1   className='padding'>Optical Automation Logo</h1>
            <h3  className='pad'>ShopperLady db Logo</h3>
            <Login 
                title = "Sign in"
                button = "Continue"
                href = "/signup"
                link="Need An Account?"
                headStatement = "Account Setup?"
                emailInput = {emailRef}
                passwordInput ={passwordRef}

                />
                 <h4  className='pad'>(c)2022, MyOneUniverse, Optical Automation, LLC, All rights reserved)</h4>
        </div>
    )
}

export default Signin
