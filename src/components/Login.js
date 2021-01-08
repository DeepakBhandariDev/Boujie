import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
 

export default function Login() {
    const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    
    
    return (
        <>
        <div className="userLogin details">
            <button onClick={() => loginWithRedirect()}>Log In</button>
        
        
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
        {isAuthenticated && (
        <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
            )}
        </div>
       
    </>)
}
