import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const changeIcon = () => setClick(!click);

    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <Link to='/' className='navbar__logo'>EPICBLOG.</Link>
                <div className='menu-icon' onClick={changeIcon}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blogs' className='nav-links'>Blogs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links'>Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/register' className='nav-links'>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;