import React from "react";
import "../css/testimonial.css"
import Swiper from "./swiper";
export default function Testimonials() {
    return (
        <div id="testimonial" className="py-16  flex justify-center  w-screen bg-gray-50">

             <div className="lg:px-20 px-10 z-50 w-full relative lg:mb-10 flex flex-col justify-center items-center ">
             <div className="absolute ml-72 w-32 mb-72 lg:mb-72 h-32 lg:ml-96 lg:-mr-96 lg:-mt-20 -z-10 lg:w-56 lg:h-56  bg-pink-400 rounded-full " ></div>
             
             <div className="flex justify-center items-center flex-col">

        <p className="text-xl lg:mb-10 mb-7 decoration-teal-600 xl:text-2xl underline underline-offset-8 underline-cyan-600 font-semibold leading-9">Testimonials</p>
        <h1 className="lg:text-3xl font-medium text-2xl">What Clients Say</h1>
        </div>
            <div className="xl:w-full w-full mt-10 lg:mt-20 flex flex-col justify-center items-center">

                        <Swiper />

                    {/* <div className="flex w-full  flex-col sm:flex-row jusitfy-start lg:justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    <div className="h-96 profile lg:w-2/5 w-full flex flex-col items-center justify-center bg-gray-300 rounded-sm">

                      <img src="" alt="" /> 
                      
                    </div>
                     <div className="flex lg:w-3/5 w-full flex-col justify-center items-center space-y-4 sm:space-y-0 m:space-y-5 lg:space-y-5 xl:space-y-8">
                    <div className="lg:h-36 h-28 w-full flex flex-col items-center justify-center bg-gray-300 rounded-sm">
                        

                        </div>
                        <div className="lg:h-36 h-28 w-full flex flex-col items-center justify-center bg-gray-300 rounded-sm">
                        
                        </div>
                        <div className="h-16 lg:h-20 w-full flex flex-col items-center justify-center bg-gray-300 rounded-sm">
                        
                        </div>
                    </div>
                </div> */}
            </div>
            </div>

        </div>

    );
}
