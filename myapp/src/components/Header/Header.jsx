import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"


const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className='header-content flex flex-column text-center text-white'>
          <h2 className='header-title text-capitalize text-italic'>
           Find your book of choice</h2> <br />
          <p className='header-text fs-18 fw-3 text-italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rerum iste tempora!</p>
         <SearchForm></SearchForm>
      


          </div>
        </header>
       
    
    </div>
  )
}

export default Header