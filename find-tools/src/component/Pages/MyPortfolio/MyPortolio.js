import React from 'react';
import portfolioHeroImage from '../../../Assets/imran-pic-b-w.png';
import { FaPhp, FaBootstrap, FaWordpressSimple, FaElementor } from 'react-icons/fa';
import { GrHtml5 } from 'react-icons/gr';
import { DiCss3, DiReact } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import project1 from '../../../Assets/project-1.png'
import project2 from '../../../Assets/project-2.png'
import project3 from '../../../Assets/project-3.png'

const MyPortolio = () => {
    const navigate = useNavigate();
    return (
        <div className='container mx-auto'>
            <div className="hero h-5/6 bg-black py-10 lg:py-20 px-4 lg:px-28 my-10 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={portfolioHeroImage} alt='' className="max-w-sm rounded-lg shadow-2xl w-full mx-auto" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-white">Myself Mahmud Hasan Imran</h1>
                        <p className="py-6 text-slate-400">I'm a Professional Web Developer</p>
                    </div>
                </div>
            </div>
            <div className="experience py-28">
                <h1 className='text-2xl lg:text-5xl font-bold text-center'>Experience With</h1>
                <div className="card shadow-xl w-10/12 lg:w-6/12 mx-auto mt-10">
                    <div className="card-body">
                        <div className="grid grid-cols-2 lg:grid-cols-4">
                            <div className='text-5xl mx-auto p-3'>
                                <GrHtml5></GrHtml5>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <DiCss3></DiCss3>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <FaBootstrap></FaBootstrap>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <FaPhp></FaPhp>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <SiJavascript></SiJavascript>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <DiReact></DiReact>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <FaWordpressSimple></FaWordpressSimple>
                            </div>
                            <div className='text-5xl  mx-auto p-3'>
                                <FaElementor></FaElementor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="educational">
                <h1 className='text-2xl lg:text-5xl font-bold text-center'>Educational Background</h1>
                <div class="hero py-14 lg:py-24 my-10 bg-slate-200 rounded-lg">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="https://www.bubt.edu.bd/assets/componats/new-image/BUBT-Logo.png" class="w-7/12 lg:w-80 rounded-lg" />
                        <div className='ml-5'>
                            <h1 class="text-5xl font-bold">Bsc. in CSE</h1>
                            <p class="py-6">I've successfully complete Bsc. in CSE from Bangladesh University of Business and Technology (BUBT).
                                Since 2018-2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project  py-28">
            <h1 className='text-2xl lg:text-5xl font-bold text-center'>My Projects</h1>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
                    <div className="project__card">
                        <div className="card shadow-2xl ">
                            <div className="card-body">
                                <img className='border rounded-lg' src={project1} alt="" />
                                <h1 className='text-2xl font-bold text-center my-5'>Grocery Shop</h1>
                                <a className='btn btn-primary' href='https://grocery-shop-4df4d.web.app/'>visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="project__card">
                        <div className="card shadow-2xl ">
                            <div className="card-body">
                                <img className='border rounded-lg' src={project2} alt="" />
                                <h1 className='text-2xl font-bold text-center my-5'>Wedding Ultrashots</h1>
                                <a className='btn btn-primary' href='https://wedding-ultra-shots.web.app/'>visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="project__card">
                        <div className="card shadow-2xl ">
                            <div className="card-body">
                                <img className='border rounded-lg' src={project3} alt="" />
                                <h1 className='text-2xl font-bold text-center my-5'>Hero Headphone</h1>
                                <a className='btn btn-primary' href="https://hero-headphone.netlify.app/"> visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortolio;