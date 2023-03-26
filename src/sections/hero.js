import React, { useState } from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../rahul-hero.json";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "../css/hero.css"
import logo from "../assets/logo.png"

function Hero() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div id="home"  className="lg:px-6 lg:mt-5 mr-5 -mt-12 h-screen flex justify-center items-center flex-col  xl:px-0">
                
                <div className="container w-screen relative z-20">
                    <div className="absolute w-32 h-32 -z-50 lg:w-64 lg:h-64 bg-pink-400 opacity-40 rounded-full lg:-ml-10 -mt-5 -ml-5 lg:-mt-10" ></div>
                    <div className="absolute w-14 h-14 ml-14 mt-16  lg:w-28 -z-40 lg:h-28 bg-pink-400  rounded-full lg:mt-32 lg:ml-28"></div>
                    <nav className="w-full pl-28 pr-40  absolute">
                        <div className="hidden lg:flex w-full f-f-p justify-center items-center py-6 relative">
                            <div className="w-2/4 ">
                                <img className="h-56 -my-24 ml-4" src={logo} alt="logo" />
                            </div>
                            <div className="md:w-1/2  xl:w-2/4">
                                <ul className="flex justify-between w-full items-center text-gray-600">
                                    <li className="border-b-2 mr-5 border-transparent transition-all duration-200  hover:border-cyan-600 pb-1">
                                    <a className="outline-none" href="#home">Home</a>
                                    </li>

 <li className="border-b-2 mr-5 border-transparent transition-all duration-200  hover:border-cyan-600 pb-1">
                                    <a className="outline-none" href="#training">Training</a>
                                    </li>

                                    <li className="border-b-2 mr-5 border-transparent transition-all duration-200  hover:border-cyan-600 pb-1">
                                    <a className="outline-none" href="#about">About</a>
                                    </li>
                                    <li className="border-b-2 mr-5 border-transparent transition-all duration-200  hover:border-cyan-600 pb-1">
                                    <a className="outline-none" href="#services">Services</a>
                                    </li>
                                    <li className="border-b-2 mr-5 border-transparent transition-all duration-200  hover:border-cyan-600 pb-1">
                                    <a className="outline-none" href="#testimonial">Testimonial</a>
                                    </li>
                                    {/* <li className="border-b-4 border-transparent pb-1">
                                        <a className="outline-none" href>Blog</a>
                                    </li> */}
                                    {/* <li className="border-b-4 border-transparent pb-1">
                                    Contact Us</a>
                                    </li> */}
                                    
                                    <a className="outline-none" href="#contact">
                                    <button class="bg-cyan-600 hover:bg-cyan-500 text-white  transition-all duration-300 font-semibold py-2  px-4 rounded-lg">
                                        Contact Us
                                    </button>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className="lg:hidden">
                        <div className="flex py-6 justify-between items-center px-4">
                        <div>
                            <img className="h-44 -my-16" src={logo} alt="logo" />
                            </div>
                            <div className=" flex items-center">
                                {show && (
                                    <ul id="list" className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                        <li className="flex cursor-pointer text-gray-600 text-sm  tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <a className="outline-none" href="#home">
                                                <span className="ml-2 font-bold">Home</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm  tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a className="outline-none" href="#about">
                                                <span className="ml-2 font-bold">About</span>
                                            </a>
                                        </li>
                                        <li className="flex cursor-pointer text-gray-600 text-sm  tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                                            <a className="outline-none" href="#services">
                                                <span className="ml-2 font-bold">Services</span>
                                            </a>
                                        </li>
                                        {/* <li className="flex flex-col cursor-pointer text-gray-600 text-sm  tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a className="outline-none" href="javascript:void(0)">
                                                <span className="ml-2 font-bold">Blog</span>
                                            </a>
                                        </li> */}
                                        <li className="flex flex-col cursor-pointer text-gray-600 text-sm  tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                            <a className="outline-none" href="#contact">
                                                <span className="ml-2 font-bold">Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <div className="xl:hidden" onClick={() => setShow(!show)}>
                                    {show ? (
                                        <div id="close" className=" close-m-menu">
                                            <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    ) : (
                                        <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="mx-auto container mb-5 lg:mb-16 relative z-0  xl:pl-20 ">
                    <div className="flex pt-8 flex-col-reverse justify-center items-center lg:items-start md:flex-row">
                        <div className="md:w-3/5 lg:w-4/5 md:pt-24 pb-10 pt-10 lg:pt-32 xl:pt-48 ">
                            <h1 className="text-3xl font-semibold lg:text-3xl mb-4 md:mb-5 xl:text-6xl  lg:font-medium text-gray-900 text-center md:text-left  f-f-i md:w-10/12 xl:w-full text-heading-color "><span className="">Our Job involves people,</span></h1>
                            <h1 className="text-3xl font-semibold  lg:text-3xl xl:text-6xl  lg:font-medium text-gray-900 text-center md:text-left  f-f-i md:w-10/12 xl:w-full text-heading-color ">  I am confident about it</h1>
                            <h2 className="md:w-8/12 py-4 text-center  md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Design | Development | Testing | Training</h2>
                            
                            {/* button animation */}
                            <div className='flex mx-auto mt-3 lg:mx-0 py-2 lg:py-3 hover:bg-cyan-500 rounded-lg cursor-pointer groupBtn1 transition-all text-white bg-cyan-600 text-lg justify-start '>
                            <div className='mr-2 pl-4 mb-1 font-semibold'>
                                <a className="outline-none" href="#training">
                                                <span >Get started</span>
                                            </a></div> 
                            <div className='flex items-center justify-center groupArr1'>
                             <div className='-mr-3  bg-white groupLine1'></div>
                                <div className="flex justify-center items-center">
                                     <ArrowRightIcon/> 
                                </div>
                             </div>
                             </div>

                        </div>
                        <div className="w-full lg:w-1/2 xl:mt-5 h-full md:h-auto m-auto flex items-center -mt-16 lg:mt-0 justify-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <Lottie className="" animationData={animationData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
