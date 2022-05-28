import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <footer className="footer p-10 bg-base-200 text-base-content  rounded-2xl">
            <div>
                <div><Link to='/'>Find Tools</Link></div>
                <p>ACME Industries Ltd.<br></br>Providing reliable tech since 1992 </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <Link to='/'>Home</Link>
                <Link to='/'>All Products</Link>
                <Link to='/'>Blogs</Link>
                <Link to='/'>My Portfolio</Link>
            </div>
            <div>
                <span className="footer-title">Home</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div className="copyright__text">
                <div className="container text-center">
                    <p>Copyright ©{fullYear}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;