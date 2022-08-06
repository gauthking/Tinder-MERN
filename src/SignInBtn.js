import React, { useState } from 'react'
import "./SignInBtn.css"
import { authentication } from './firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function SignInBtn(props) {
    const navigate = useNavigate()
    const [userlog, setUserlog] = useState(true);
    onAuthStateChanged(authentication, (user) => {
        if (user) {
            setUserlog(true);
        } else {
            setUserlog(false);
            console.log("No user")
        }
    });
    const signOutIn = e => {
        if (userlog) {
            signOut(authentication).then(() => {
                navigate('/')
                alert("Signed Out! Please refresh")
                console.log("User signed out successfully")
            }).catch((error) => {
                console.log("Error occurred while signing out : ", error)
            });

        }
        else {
            navigate("/")
        }

    }
    return (
        <div className='signinbtn'>
            <button className='signinbtn__main' onClick={signOutIn}>
                {props.condition === "signin" ? "Sign In" : "Sign Out"}
            </button>
        </div>
    )
}

export default SignInBtn