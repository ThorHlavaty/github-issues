import React from 'react'
import { Link } from 'react-router-dom';
import "./UserCard.css"

export default function User(props) {
    const {login, avatar_url, blog, email, bio, type, id } = props.user;

        return (
        <div className="UserCard" key={ id }>
          <div className="imageBox">
          <img alt="avatar" src={avatar_url} />
          </div>
          <div className="loginInfo">

            <h3 style={{ fontWeight: 'bold' }}><Link to={`./users/${login}`}>{login}</Link></h3>
            <ul>
              <li><b>Account Type: </b>{ type }</li>
              <li><b>Blog: </b>{ blog }</li>
              <li><b>Email: </b>{ email }</li>
              <li><b>Bio: </b>{ bio }</li>
            </ul>
          </div>
        </div>
        )
        }
    
