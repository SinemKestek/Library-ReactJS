import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className="navbar-brand"> <h2 className='text-italic'>Book Land</h2></div>
      <div>
        <ul className='flex flex-sb'>
          <li className='nav-link'>Home</li>
          <li className='nav-link'>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar