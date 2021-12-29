import React, {useRef} from 'react'
import Login from '../components/Login'
import { auth } from '../utils/firebase'
import { doc, setDoc } from 'firebase/firestore'
import db from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Signin from './Signin'
import Logout from './Logout'

function Signup() {
    // What does userRef do?  creates a reference point,
        const emailRef = useRef()
        const passwordRef = useRef()

        // create a function that registers the new user
        const register = async () => {
            // Try to sign up with email and password
            try {
                await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                // After creating the user make an api call to firestore to add it to our database
                .then(async (cred)=> {
                    // Create a document for the user using the credentials 
                    await setDoc(doc(db,"users", `${cred.user.uid}`),
                    {
                        // Pass in the fields of how you want to structure your data
                        // https://console.firebase.google.com/project/todo-app-e73c1/firestore/data/~2Ftasks~2FH0NFLlCFovhHMDI6bD6w
                        // as seen in Cloud Firestore
                        //     an tasks "key" array of Objects

                        tasks: [
                            {
                                text:"Create your first TODO",
                                status: true
                            }
                        ]
                    })
                    if(cred) {
                        window.location = "/dashboard"
                    }
                })
            }
            catch(error) {
                <div>
                    <h1>Logout Account Already Created!</h1>
                    <a href='/Login'>Login</a>
                    alert(error.message)
                </div>
                
            }
        }

    return (
        <>
        <div>
        <h1   className='padding'>Optical Automation Logo</h1>
            <h3  className='pad'>ShopperLady db Logo</h3>
             <Login 
                title = "Register"
                button = "Sign up"
                href = "/"
                link="Sign in"
                headStatement = "Already haver an account?"
                emailInput = {emailRef}
                passwordInput ={passwordRef}
                btnFunction={register}
                />
        </div>
        <h4  className='pad'>(c)2022, MyOneUniverse, Optical Automation, LLC, All rights reserved)</h4>

        </>
    )
}

export default Signup
