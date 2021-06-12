import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
        // Firebase login 
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // Firebase register 
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it sucessfully create user
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG28.png" />
            </Link>

            <div className="login_container">
                <h1 >Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} type='submit' className="login_signin_button">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON's Conditions of 
                    use & Sale. Please see your Privacy Notice, our Cookies 
                    Notice and our Interest-Based Ads Notice. 
                </p>

                <button onClick={register} className="login_register_button">Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
