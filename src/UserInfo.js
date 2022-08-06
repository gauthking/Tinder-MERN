import React, { useEffect, useState } from 'react'
import "./UserInfo.css"
import { authentication, db } from './firebase';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"
import SignInBtn from './SignInBtn';


function UserInfo() {
    const [users, setUsers] = useState([])
    const [arrObj, setArrObj] = useState([]);
    const [userlog, setUserlog] = useState(true);

    useEffect(() => {
        setArrObj({ name: "", u_email: "", age: "", gender: "", u_id: "" })

        onAuthStateChanged(authentication, (user) => {
            if (user) {
                setUserlog(true);
            } else {
                setUserlog(false);
                console.log("No user")
            }
        });
        if (userlog) {
            onSnapshot(collection(db, "users"), (snapshot) =>
                setUsers(snapshot.docs.map((doc) => doc.data()))
            )
            for (let i = 0; i < users.length; i++) {
                if (users[i].u_email === authentication.currentUser.email) {
                    setArrObj(users[i]);
                }
            }
        }
        else {
        }


    }, [users, userlog])


    return (
        <>
            <div className='userinfo'>
                <form>
                    <div className='userinfo__name'>
                        <p>Name : </p>
                        <div className="userinfo__nameValue">{arrObj.name ? arrObj.name : ""}</div>
                    </div>
                    <div className='userinfo__age'>
                        <p>Age :</p>
                        <div className="userinfo__ageValue">{arrObj.age ? arrObj.age : ""}</div>
                    </div>
                    <div className='userinfo__gender'>
                        <p>Gender : </p>
                        <div className="userinfo__genderValue">{arrObj.gender ? arrObj.gender : ""}</div>
                    </div>
                    <div className='userinfo__email'>
                        <p>Registered Email ID : </p>
                        <div className="userinfo__genderValue">{arrObj.u_email ? arrObj.u_email : ""}</div>
                    </div>
                </form>
            </div>
            <SignInBtn condition={userlog ? "signout" : "signin"} />
        </>

    )
}

export default UserInfo