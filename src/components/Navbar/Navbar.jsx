import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {RiCloseFill} from 'react-icons/ri';

import logo from '../../assets/logo.png';
import './Navbar.css';
import { useEffect } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userLocation, setUserLocation] = useState('');
  const location = useLocation().pathname;

  const handleUserLocation = (location) => {
    setUserLocation(location);
  }

  const pathLocation = location.split('/')[1];

  useEffect(() => {
    setUserLocation(pathLocation);
  }, [location])

  return (
    <div className='nav-container'>
      <img src={logo} alt="logo" />
      <div className='navigation'>
        <hr />
        <ul className='list'>
          <li className={userLocation ===  '' ? 'list-items active' : 'list-items'} onClick={() => handleUserLocation('')}>
            01 <Link className='link' to='/'>Home</Link>
          </li>
          <li className={userLocation ===  'destination' ? 'list-items active' : 'list-items'} onClick={() => handleUserLocation('destination')}>
            02 <Link className='link' to='/destination/moon'>Destination</Link>
          </li>
          <li className={userLocation ===  'crew' ? 'list-items active' : 'list-items'} onClick={() => handleUserLocation('crew')}>
            03 <Link className='link' to='/crew/1'>Crew</Link>
          </li>
          <li className={userLocation ===  'tech' ? 'list-items active' : 'list-items'} onClick={() => handleUserLocation('tech')}>
            04 <Link className='link' to='/tech/1'>Technology</Link>
          </li>
        </ul>
      </div>
      <FiMenu className='hamburger' onClick={() => setShowMenu(!showMenu)}/>
      {
        showMenu && (
          <div className={showMenu ? 'mobile-nav is-active' : 'mobile-nav'}>
            <RiCloseFill className='close-icon' onClick={() => setShowMenu(!showMenu)}/>
            <ul className='mobile-list'>
              <li className='mobile-list-items'>01 <Link className='link' to='/'>Home</Link></li>
              <li className='mobile-list-items'>02 <Link className='link' to='/destination/moon'>Destination</Link></li>
              <li className='mobile-list-items'>03 <Link className='link' to='/crew/1'>Crew</Link></li>
              <li className='mobile-list-items'>04 <Link className='link' to='/tech/1'>Technology</Link></li>
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Navbar