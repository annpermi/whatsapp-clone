import React from 'react';
import { Button } from '@material-ui/core';
import './login.css'
import { auth, provider } from '../firebase';
function Login() {
    //Add google authentication
    const signIn = () => {
        //go to data base authentication and unable google
        auth.signInWithPopup(provider).then(result=> console.log(result)).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' alt='WhatsApp Logo'/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login;
