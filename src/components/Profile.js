import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import UserForm from './UserForm';

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div className="details">
         <img src={user.picture} alt={user.name}/>   
         <h2>{user.name}</h2>
         <p>{user.email}</p>
         <UserForm/>
        </div>
    ))
}
