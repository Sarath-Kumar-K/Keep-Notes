import React from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
        <nav>
            <div className='left-menu'>
                <div className='m-d menu-bar'><i className="fa-solid fa-bars"></i></div>
                <div className='logo'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div><h1>Notes</h1></div>
                </div>
                <div className='search-div d-d'>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder='Search' />
                    <button className='clear'><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>

            <div className='right-menu'>
                <div className='m-d m-search'><i className="fa-solid fa-magnifying-glass">
                    <input type="text" /></i></div>
                <div className='d-d'><i className="fa-solid fa-rotate-right"></i></div>
                <div className='d-d'><i className="fa-solid fa-list"></i></div>
                <div><i className="fa-solid fa-gear"></i></div>
            </div>
        </nav>
    </header>
  )
}

export default Header