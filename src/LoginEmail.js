import React, { useState } from 'react';
import "./LoginEmail.css";
import { Link, useNavigate } from "react-router-dom"
import { authentication } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth"

function LoginEmail() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const loginWithEmailPasswd = e => {
        e.preventDefault();

        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    return (
        <div className='loginemail'>
            <Link to="/"><img src="https://www.tinderpressroom.com/images/tinder_logo_white.png" alt="" className='loginemail__logo' /></Link>
            <div className="loginemail__credentials">
                <form>
                    <div className="loginemail__credentialsEmail">
                        <p>Email</p>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="loginemail__credentialsPasswd">
                        <p>Password</p>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button onClick={loginWithEmailPasswd} type="submit" className='loginemail__credentialsSubmit'>
                        Login to Tinder❤️‍🔥
                    </button>
                </form>
            </div>

        </div>
    )
}

export default LoginEmail