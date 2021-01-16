import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
 

export default function Login() {
    const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    
    
    return (
        <>
        <div className="userLogin ">
            
            {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
            {isAuthenticated && (
            <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
            )}
            <Profile className="card"/>
        
        </div>
       
    </>)
}
