import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./CreateAcc.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication, db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";



function CreateAcc() {
    const [age, setAge] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState();

    const navigate = useNavigate();


    // const user = authentication.currentUser;

    const registerForTinderApp = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(authentication, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.displayName = name;
            addoc(user);
            // collection("users").doc(user.uid).set({
            //     age: age,
            //     gender: gender,
            //     name: name,
            //     user_id: user.uid
            // })
            // console.log(user);
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }

    const addoc = async (user) => {
        const docRef = await addDoc(collection(db, "users"), {
            age: age,
            gender: gender,
            name: name,
            u_email: user.email,
            u_id: user.uid
        });
        console.log("User Document Added to DB ");
        navigate('/')

    }


    return (
        <div className='createacc'>
            <Link to='/' ><img src="https://www.tinderpressroom.com/images/tinder_logo_white.png" alt="" className='createacc__logo' /></Link>

            <div className="createacc__register">
                <form>
                    <div className='createacc__registerName'>
                        <p>Name</p>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='createacc__registerAge'>
                        <div>
                            <p>Age</p>
                            <input type="text" value={age} onChange={e => setAge(e.target.value)} style={age < 18 ? { backgroundColor: '#cc0f1571' } : { backgroundColor: 'white' }} />
                        </div>

                        <div className="createacc__registerGender">
                            <p>Gender</p>
                            <select name="gender" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                                <option value="none">None</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                            </select>
                        </div>
                    </div>
                    <div className='createacc__registerEmail'>
                        <p>Email</p>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='createacc__registerPasswd'>
                        <p>Password</p>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button onClick={registerForTinderApp} className='createacc__registerSubmit' type="submit">Start Dating❤️‍🔥</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAcc