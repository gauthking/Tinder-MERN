import React, { useEffect, useState } from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"
import { SwipeDown } from '@mui/icons-material'
import { authentication, db } from './firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import axios from "./axios"
function TinderCards() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "users"), (snapshot) =>
            setUsers(snapshot.docs.map((doc) => doc.data()))
        )
        for (let i = 0; i < users.length; i++) {
            if (authentication.currentUser.email === users[i].u_email) {
                setCurrentUser(users[i]);
            }
        }

    }, [users])


    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setDates(req.data);
            console.log(req)
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
    }
    const outOfFrame = (name) => {
        console.log(name + "left of the screen")
    }
    const genderFilter = (ele) => {
        if (currentUser.gender === "male") {
            return ele.gender === "female";
        }
        else {
            return ele.gender === "male"
        }

    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>

                {dates.filter(genderFilter).map((date) => (
                    <TinderCard
                        className='swipe'
                        key={date.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, date.name)}
                        onCardLeftScreen={() => outOfFrame(date.name)}
                    >
                        <div style={{ backgroundImage: `url(${date.imgURL})` }} className="card">
                            <h3>{date.name}</h3>
                        </div>
                    </TinderCard>

                ))}
            </div>

        </div>
    )
}

export default TinderCards