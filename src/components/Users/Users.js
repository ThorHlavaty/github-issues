import React, { useState } from 'react'

export default function Users() {
const [ userName, setUserName ] = useState();
const [users, setUsers] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
    .then(res => { if (res.status !== 200){ 
        throw Error(`Cannot find user: ${userName}`)
        }
        return res;
    })
    .then(res => res.json())
    .then(data => {
        setUsers(users.concat(data));
        setUserName('')
    })
    .catch(() => {
        alert('User not found!')
    })
}

    return (
        <div>
            <h1>User Search</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username: 
                <input type="text" id="username" name="username" value={userName} onChange={ (event) => {setUserName(event.target.value)}}/>
                </label>
                <button type="submit">Search!</button>
            </form>
            <h2>Results</h2>
            <div className="users">
                { users.map((user) => {
                    return <div>{ user.login }</div>
                })}
            </div>
        </div>
    )
}
