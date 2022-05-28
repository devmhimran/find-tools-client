import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <footer class="footer p-10 bg-base-200 text-base-content  rounded-2xl">
            <div>
                <div><Link to='/'>Find Tools</Link></div>
                <p>ACME Industries Ltd.<br></br>Providing reliable tech since 1992 </p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Quick Links</span>
                <Link to='/'>Home</Link>
                <Link to='/'>All Products</Link>
                <Link to='/'>Blogs</Link>
                <Link to='/'>My Portfolio</Link>
            </div>
            <div>
                <span class="footer-title">Home</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
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