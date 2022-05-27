import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const navMenu =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allproducts'>All products</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>

        </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 drop-shadow-lg rounded-lg my-5 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Find Tools</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenu}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} alt='' />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <p to='/' className="justify-between capitalize font-bold">
                                                {
                                                    user ? user.displayName : ''
                                                }
                                            </p>
                                        </li>
                                        <li>
                                            <Link to='/' className="justify-between">
                                                Profile
                                            </Link>
                                        </li>

                                        <li><button onClick={logout}>Logout</button></li>
                                    </ul>
                                </div>
                            </> :
                            <Link className="btn btn-primary" to='/signin'>Sign in</Link>

                    }
                    <label htmlFor="dashboard-drawer" tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>

























        </div>
    );
};

export default Navbar;