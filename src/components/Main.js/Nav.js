import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <FontAwesomeIcon icon={faCoffee} />
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