import React, { useEffect, useMemo, useRef, useState } from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CountUp from "react-countup";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "../css/about.css"

const About = () => {
    const target2=useRef()
const [visible,isVisible]=useState(false)

const callBackFun=(entries)=>{
  const [entry]=entries
  isVisible(entry.isIntersecting)
}

const options=useMemo(()=>{
    return{
        root:null,
        rootMargin:"0px",
        threshold:1
    }
},[])

useEffect(() => {
  const observer =new IntersectionObserver(callBackFun,options);
  const currentTarget= target2.current;
  if(currentTarget){
    observer.observe(currentTarget)
  }

  return () => {
    if(currentTarget){
        observer.unobserve(currentTarget)
        
      }
  }
}, [target2,options])
    return (
        <div id="about" className="mx-auto container flex justify-center items-center w-screen py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="w-80 lg:w-2/4 lg:ml-20  sm:w-auto flex flex-col justify-start items-start">
                    <div>
                    <p className="text-2xl mb-5 decoration-teal-600 xl:text-3xl underline underline-offset-8 underline-teal-800 font-semibold leading-9 text-gray-800">About</p>
                    </div>
                    <div className="mt-4 lg:w-4/5 mb-7 lg:mb-10 xl:w-4/5">
                        <p className="xl:text-4xl mb-10 text-3xl lg:w-80  ">Quality is the best
business plan</p>

<p className="my-5 text-gray-600">We have the team who is always passionate about self-development and self-improvement in their life.
 They always looking to challenge themself and learn new things.</p>
<p className="my-5 text-gray-600 ">
We wil start with a design as UI / UX design and move on to developing single-page websites to 
complete functional websites and mobile apps. Also test and debug any kind of softwares.
</p>
<p className="text-gray-600 ">
We have good experienced workers to deliver your within the estimate time.You can learn a lot if you scroll down.
</p>
                    </div>
                    <div className='flex mb-10 lg:mb-0  py-2 lg:py-3 hover:bg-cyan-500 items-center rounded-lg cursor-pointer groupBtn2 transition-all text-white bg-cyan-600 text-lg justify-start '>
                            <div className='mr-2 pl-4 flex items-center justify-center mb-1 font-semibold'><a className="outline-none" href="#contact">
                                                <span >Contact Us</span>
                                            </a></div> 
                            <div className='flex items-center justify-center groupArr2'>
                             <div className='-mr-3  bg-white groupLine2'></div>
                                <div className="flex justify-center items-center">
                                     <ArrowRightIcon/> 
                                </div>
                             </div>
                             </div>
                </div>

                <div className="flex relative lg:w-2/4 w-full  flex-col sm:flex-row jusitfy-start lg:justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    <div className=" ml-40 mb-72 absolute flex justify-center items-center h-96 w-96 -z-50">
                    <div className="absolute w-14 h-14  ml-10 mb-56  lg:w-20 -z-30 lg:h-20 bg-pink-400 opacity-70 rounded-full -mt-50"></div>
                
                <div className="absolute w-32 h-32 mt-10 ml-56 -z-40 lg:w-48 lg:h-48 bg-blue-400 opacity-85 rounded-full " ></div>
                    </div>
                    
                   
                <div className="flex flex-col relative justify-center items-center space-y-4 sm:space-y-0 m:space-y-5 lg:space-y-5 xl:space-y-8">
                    <div ref={target2} className="h-64 transition-all duration-300 hover:scale-110  hover:text-white w-44 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">
                     
                          <PersonAddIcon fontSize="large"/>  
                          <h1 className="text-5xl my-4">
                          {visible ?  <CountUp  end={2} duration={1} suffix="+"/> 
                      : "2+"
                      }
                          </h1>
                        <h1 className="text-sm">Years Of Experience</h1>


                        </div>
                       
                        <div className="h-64 transition-all duration-300 hover:scale-110  hover:text-white w-44 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">

                           <FileCopyIcon fontSize="large"/> 
                           <h1 className="text-5xl my-4">
                           {visible ?  <CountUp  end={50} duration={2} suffix="+"/> 
                      : "50+"
                      }
                            
                           </h1>
                        <h1 className="text-sm">Projects Completed</h1>

                        </div>
                    </div>
                   
                    <div className="h-64 transition-all duration-300 hover:scale-110  hover:text-white w-44 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">
                       <SentimentVerySatisfiedIcon fontSize="large"/>
                       <h1 className="text-5xl my-4">
                       {visible ?  <CountUp  end={40} duration={3} suffix="+"/> 
                      : "40+"
                      }
                       </h1>
                <div className="absolute lg:hidden w-32 h-32 mr-56 mb-48 -z-10 lg:w-48 lg:h-48 bg-teal-100 rounded-full " ></div>

                        <h1 className="text-sm">Happy Clients</h1>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default About;
