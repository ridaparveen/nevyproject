import React, { useState } from 'react'
import "./style.css";
import menu from './menuApi';
import MenuCard from './MenuCard';
import Header from '../Header';

const Navbar = () => {
    const[menuData,setMenuData] = useState(menu);
    
  return (
    <>
    <div>
      <nav className='Navbar'>
      <div className='btn-group'>
      <button className='btn-group___item'></button>
        <button className='btn-group__item '>Medical Darphen</button>
        <button className='btn-group__item'>Home</button>
        <button className='btn-group__item'>Product</button>
        <button className='btn-group__item'>Distributer</button>
        <button className='btn-group__item'>Manufactruer</button>
        <button className='btn-group__item'>About us</button>
        <button className='btn-group__item'>Blog</button>
        <button className='btn-group__item'>Login</button>
      </div>
      </nav>
      <nav className="navbar navbar-light bg-light">
      <div className='searchBar'>
  <form class="form-inline">
    <input class="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
</div>

      {/* <Header /> */}
   
    <MenuCard menuData={menuData}/>
     </>
  )
}

export default Navbar
