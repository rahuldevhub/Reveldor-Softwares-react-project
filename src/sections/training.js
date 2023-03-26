import React, { useState } from "react";
import uxDesign from "../assets/ux-design.png"
import "../css/hero.css"

const Training = () => {
  return (
    <div id="training" className="py-16  flex justify-center  w-screen ">

             <div className="lg:px-20 px-10 z-50 w-full relative lg:mb-10 flex flex-col justify-center items-center ">
             <div className="absolute ml-96 w-32 -mb-16 lg:mb-72 h-32 lg:ml-96 lg:-mr-96   lg:mt-20 -z-10 lg:w-56 lg:h-56  bg-pink-400 rounded-full " ></div>
             
             <div className="flex justify-center items-center flex-col">

             <h1 className="lg:text-4xl font-semibold text-2xl">Training</h1><br></br>
             <p className="text-lg lg:mb-10 mb-7  xl:text-xl   font-regular leading-9">Our team will provide you an training to become professional expertise in the tech field</p>
        

        </div>
            

        <div className="mx-auto container mb-5 lg:mb-16 relative z-0  xl:pl-20 ">
                    <div className="flex pt-8 flex-col-reverse justify-center items-center lg:items-start md:flex-row">
                        <div className="md:w-3/5 lg:w-4/5 md:pt-24 pb-10 pt-10 lg:pt-32 xl:pt-28 ">
                            
                         
                        <div className="h-96 transition-all duration-300 hover:scale-110  hover:text-white w-80 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-grey shadow-2xl rounded-xl">
                            
                           <h1 className="text-5xl my-4">  
                           </h1>
                           <h1 className="text-5xl font-semibold">Next</h1>
                            <h1 className="text-5xl font-semibold">Bootcamp</h1><br></br><br></br><br></br>
                        <h1 className="text-3xl ">Comming Soon</h1>
                        </div>

                        </div>
                        


                        <div className="md:w-3/5 lg:w-4/5 md:pt-24 pb-10 pt-10 lg:pt-32 xl:pt-28 ">
                        <div className="h-96 transition-all duration-300 hover:scale-110  hover:text-white w-80 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">
                        
                        <h1 className="text-3xl font-semibold">Workshop</h1><br></br>
                        <img className="h-40 w-40" src={uxDesign} />
                        <h1 className="text-xl font-semibold">
                          
                User Interface Design
              </h1>
       <br></br>

                        <a className="outline-none" href="https://docs.google.com/forms/d/e/1FAIpQLSca2lpIUMM6UHiHBq-vw3CYTHbUwrN3XRazUygqcITQsKDaOQ/viewform?usp=sf_link" target="_blank">
                                    <button class="bg-cyan-600 hover:bg-black text-white  transition-all duration-300 font-semibold py-2  px-4 rounded-lg">
                                        Register Here
                                    </button>
                        </a>
                




                        
                        </div>
                        </div>




                    </div>
                </div>

            </div>

        </div>
  )
}

export default Training
