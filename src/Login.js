import React, { useState } from 'react'
import "./Login.css"
import GoogleIcon from '@mui/icons-material/Google';
import { authentication } from './firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth"
import { Email } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from "./firebase"

function Login() {
    const [users, setUsers] = useState([])

    const navigate = useNavigate();
    const [userlog, setUserlog] = useState(true);
    onAuthStateChanged(authentication, (user) => {
        if (user) {
            setUserlog(true);
        } else {
            setUserlog(false);
        }
    });



    return (
        <div className='login'>
            <Link to='/'><img src="https://www.tinderpressroom.com/images/tinder_logo_white.png" alt="" className='login__logo' /></Link>


            <Link to="/googleauth" style={{ textDecoration: 'none' }}>
                <div className="login__google" >
                    <GoogleIcon style={{ color: "white" }} />
                    <button >Sign in with Google</button>
                </div>
            </Link>
            <Link to="/loginemail" style={{ textDecoration: 'none' }}>
                <div className="login__email">
                    <Email style={{ color: "white" }} />
                    <button >Sign in with Email</button>
                </div>
            </Link>

            <Link to="/createacc" style={{ textDecoration: 'none' }}>
                <div className="login__createacc">
                    Create Tinder Account
                </div>
            </Link>



        </div>
    )
}

export default Login