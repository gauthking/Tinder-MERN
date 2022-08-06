import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginEmail.css";
import { authentication, db } from "./firebase"
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function GoogleAuth() {
    const [age, setAge] = useState();
    const [gender, setGender] = useState("");
    const [users, setUsers] = useState([])
    const [flag, setFlag] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) =>
            setUsers(snapshot.docs.map((doc) => doc.data()))
        )
    }, [users])

    const loginWithGoogleCreds = e => {
        e.preventDefault()
        const google_provider = new GoogleAuthProvider();
        signInWithPopup(authentication, google_provider)
            .then((result) => {
                console.log("Google Auth : ", result);
                const user = result.user;
                for (let i = 0; i < users.length; i++) {
                    if (user.email === users[i].u_email) {
                        setFlag(true);
                    }
                    else {
                        setFlag(false);
                    }
                }
                if (flag === true) {
                    alert("USER ALREADY PRESENT!")
                }
                else {
                    console.log("NEW USER ADDED!")
                    addoc(user);
                }
                console.log(flag)
                navigate("/userinfo");


            }).catch((err) => {
                console.log(err)
            })
        console.log(users)
    }
    const addoc = async (user) => {

        const docRef = await addDoc(collection(db, "users"), {
            age: age,
            gender: gender,
            name: user.displayName,
            u_email: user.email,
            u_id: user.uid
        });
        console.log("User Document Added to DB ");
    }
    return (
        <div className='createacc'>
            <Link to='/' ><img src="https://www.tinderpressroom.com/images/tinder_logo_white.png" alt="" className='createacc__logo' /></Link>

            <div className="createacc__register">
                <form>

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



                    <button onClick={loginWithGoogleCreds} className='createacc__registerSubmit'>Start Dating❤️‍🔥</button>
                </form>
            </div>
        </div>
    )
}

export default GoogleAuth