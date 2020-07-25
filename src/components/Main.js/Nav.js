import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        LibraryManager
      </div>
      <ul className='container'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Sign in</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;