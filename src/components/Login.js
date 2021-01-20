import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './Profile';
import LogoutButton from './buttons/LogoutButton';
import LoginButton from './buttons/LoginButton';
 

export default function Login() {
    const { isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    
//localStorage.setItem("user",user);
    return (
        <>
        <div className="userLogin ">
            
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <Profile className="card"/>
        
        </div>
       
    </>)
}
