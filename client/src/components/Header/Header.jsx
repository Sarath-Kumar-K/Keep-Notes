import React from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
        <nav>
            <div className='left-menu'>
                <div className='logo'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div><h1>Notes</h1></div>
                </div>
                <div className='search-div'>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder='Search' />
                    <button className='clear'><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>

            <div className='right-menu'>
                <div className='m-d'><i className="fa-solid fa-magnifying-glass"></i></div>
                <div><i className="fa-solid fa-rotate-right"></i></div>
                <div><i className="fa-solid fa-list"></i></div>
                <div><i className="fa-solid fa-gear"></i></div>
                <div className='m-d'><i className="fa-solid fa-bars"></i></div>
            </div>
        </nav>
    </header>
  )
}

export default Header