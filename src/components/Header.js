import React from 'react'
import { useRef } from 'react';
 import { MdFastfood } from 'react-icons/md';

const Header = ({onRecipeSearch}) => {

    const serchRef= useRef();

    const submitHandler =(e)=>{
        e.preventDefault();
        onRecipeSearch(serchRef.current.value);
    }


  return (
    <header>
        <div className="logo">
            <MdFastfood className='icon'/>
            <span>Food Recipe</span>
        </div>
        <form className="input-group" onSubmit={submitHandler}>
            <input type="text"
            placeholder='search your recipe....'
            className='form-control'
            ref={serchRef}
            />
            <button className="btn" >Search Recipe</button>
        </form>
    </header>
  )
}

export default Header