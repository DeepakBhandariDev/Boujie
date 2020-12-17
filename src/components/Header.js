import React from 'react';
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import {Link} from 'react-router-dom';

export default function Header() {
    return (
    <header>
        <div className="logo">
            <h1><Link to = "/products">Boujie Apparels</Link></h1>
        </div>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Products">Products</Link></li>
            <li><Link to = "/">About</Link></li>
            <li><Link to = "/">Contacts</Link></li>
            <li><Link to = "/">Login / Register</Link></li>
            <li>
            <img src={Close} alt="" width="30" className="menu"/>
            </li>
        </ul>
        <div className="menu">
            <img src={Menu} alt="" width="30"/>
        </div>
        
    </header>   
    )
}
