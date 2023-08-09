import React,{useRef,useEffect} from 'react'
import { useGlobalContext } from '../context';
import {useNavigate} from 'react-router-dom';
import "./SearchForm.css"

const SearchForm = () => {
const {setSearchTerm,setResultTitle}=useGlobalContext();
const searchText=useRef('');
const navigate=useNavigate()

useEffect(()=>searchText.current.focus(),[]);
const handleSubmit=(e)=>{
  e.preventDefault();
  let tempSearchTerm=searchText.current.value.trim();
  if((tempSearchTerm.replace(/[^\w\s]/gi,"")).lenght===0){
    setSearchTerm("the lost world");
    setResultTitle("Please enter somenthing..")

  }
  else{
    setSearchTerm(searchText.current.value)
  }

  navigate("/book");
}

  return (
    <div className='search-form'>
      <div className="container">
        <div className="search-form-content">
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex bg-white flex-sb'>
              <input type="text" className='form-control'  placeholder='The Lost World.' ref={searchText}/>
              <button className='flex flex-c' onClick={handleSubmit}>Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm