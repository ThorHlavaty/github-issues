import React, { useEffect, useState } from 'react'
import UserCard from "../UserCard/UserCard"
import { useParams } from 'react-router-dom'

export default function UserPage() {
    const { username } = useParams();
    const [userData, setUserData] = useState([]);
    
    useEffect(()=> {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {setUserData(data)})
}, [null])

    return (
        <div>
            <UserCard user={userData}/>
        </div>
    )
}
