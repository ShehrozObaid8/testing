import React from 'react'
import './style.css'
import {  Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>


            <div class="navbar">
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/product'}>Product</Link>
        
            </div>
        </div>
    )
}


