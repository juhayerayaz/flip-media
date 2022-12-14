import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-200 px-9 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='rounded'><Link to='/'>Home</Link></li>
                            <li className='rounded'><Link to='/posts'>Posts Page</Link></li>
                            <li className='rounded'><Link to='/about'>About me</Link></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Dummy APi</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='rounded'><Link to='/'>Home</Link></li>
                        <li className='rounded'><Link to='/posts'>Posts Page</Link></li>
                        <li className='rounded'><Link to='/about'>About me</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className="btn">Get started</a>
                </div>
            </div>
        </>
    )
};

export default Navbar;