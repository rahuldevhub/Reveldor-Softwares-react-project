import React, { useEffect, useMemo, useRef, useState } from "react";
import CountUp, { useCountUp }  from "react-countup";
import EngineeringIcon from '@mui/icons-material/Engineering';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupsIcon from '@mui/icons-material/Groups';
import "../css/contact.css"
import axios from "axios";


export default function ContactUs() {

const target1=useRef()
const [mailId,setMailId]=useState("");
const [value,setValue]=useState("");
const [userName, setUserName]=useState("")
const [success,setSuccess]=useState(false)
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
  const currentTarget= target1.current;
  if(currentTarget){
    observer.observe(currentTarget)
  }

  return () => {
    if(currentTarget){
        observer.unobserve(currentTarget)
        
      }
  }
}, [target1,options])

// const handleSubmit=async()=>{
//     let dataEmail={
//         email: mailId,
//         name: userName,
//         phone: value,
// }
//     await axios.post("https://highavenue1.herokuapp.com/mail",dataEmail)
//     .then((res)=>{
//         setSuccess(true)
//         setMailId("")
//         setValue("")
//         setUserName("")
//         setTimeout(() => {
//             setSuccess(false)
//         }, 5000);
//     }
//     )
//     .catch((err)=>console.log(err))
       
//       }


// visible && start()
    return (
        <>
            <div id="contact"  className="py-4  lg:py-8 mb-14 relative">
            <div className="absolute w-14 h-14  ml-6 mt-3  lg:w-20  lg:h-20 bg-pink-400 opacity-90 rounded-full -mt-50"></div>

                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto  xl:container">
                        <div className="xl:w-2/4 w-full flex  flex-col justify-center items-center">
                            <div className="mt-10 mb-16 lg:mb-24">
                            <h1 className="lg:text-5xl text-4xl font-medium">Technical Expertise</h1>
                            </div>
                            <div className="flex   flex-col sm:flex-row jusitfy-start lg:justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    <div  ref={target1} className="h-64 transition-all duration-300 hover:scale-110  hover:text-white w-44 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">
                      
                       <DeveloperModeIcon />
                       <h1  className="text-4xl my-3">
                      {visible ?  <CountUp  end={15} duration={2} suffix="+"/> 
                      : "15+"
                      }
                        
                       </h1>
                    <div className="absolute w-40 h-40 opacity-20 ml-56 mb-56  lg:w-20 -z-30 lg:h-20 bg-cyan-300  rounded-full -mt-50"></div>

                        <h1 className="text-sm">Developers</h1>
                    </div>
                     <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 m:space-y-5 lg:space-y-5 xl:space-y-8">
                     <div className="h-64 transition-all duration-300 hover:scale-110  hover:text-white w-44 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">

                          <EngineeringIcon/>  
                          <h1 className="text-4xl my-3">
                          {visible ?  <CountUp  end={30} duration={2} suffix="+"/> 
                      : "30+"
                      }
                            
                          </h1>
                        <h1 className="text-sm">Freelancers</h1>


                        </div>
                        <div className="h-64 transition-all duration-300 hover:scale-110  hover:text-white w-44 relative hover:bg-cyan-600  flex flex-col items-center justify-center bg-white shadow-2xl rounded-xl">
                           <GroupsIcon/> 
                           <h1 className="text-4xl my-3">
                           {visible ?  <CountUp  end={20} duration={3} suffix="+"/> 
                      : "20+"
                      }
                            
                           </h1>
                <div className="absolute lg:hidden w-32 h-32 mr-56 mb-48 -z-40 lg:w-48 lg:h-48 bg-teal-100 rounded-full " ></div>

                        <h1 className="text-sm">Interns</h1>

                        </div>
                    </div>
                   
                   
                </div>
                        </div>
                    
                        <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                           
                        <div className=" flex relative flex-col justify-center items-center">
                            <div className="lg:mt-0 mt-16 mb-12 lg:mb-24">
                            <h1 className="lg:text-5xl text-4xl font-medium">Get a Quotation</h1>
                            </div>
                            <div className=" form relative py-7  px-12 shadow-2xl rounded-3xl">
                                <form  className="flex  relative flex-col" >
                                    <h1 className="mb-3 text-lg font-medium">Name</h1>
                                    <input onChange={(e)=>setUserName(e.target.value)} required className="rounded-xl mb-5 border outline-none h-12 p-4 bg-gray-100 w-64"  placeholder="Enter your name" type="text" />
                                      
                                      <h1 className="mb-3 text-lg font-medium">Phone</h1>
                                    <input onChange={(e)=>setValue(e.target.value)} required className="rounded-xl mb-5 border outline-none h-12 p-4 bg-gray-100 w-64" placeholder="Enter your number" type="phonenumber" />
                                      
                                    <h1 className="mb-3 text-lg font-medium">Type of service</h1>
                                    <input onChange={(e)=>setMailId(e.target.value)} required className="rounded-xl mb-5 border outline-none h-12 p-4 bg-gray-100 w-64" placeholder="I need a website..." type="email" />
                                      
                                    
                                </form>
                                <a className="outline-none" href="mailto:reveldorsoftwares@gmail.com"><div className="mx-auto cursor-pointer shadow-sm hover:bg-cyan-500  transition-all duration-300 bg-cyan-600 mt-3 mb-2 text-white font-medium text-lg flex justify-center items-center rounded-xl w-full h-12 py-2 outline-none">Get a Quotation</div></a>

                                <div className="absolute  w-32 lg:-mt-10 lg:-ml-36 h-32 mb-20 ml-64 -z-50 lg:w-40 lg:h-40  bg-pink-200  rounded-full " ></div>
                                <div className="absolute w-14 h-14  ml-28 mt-24 -z-50  lg:w-20  lg:h-20 bg-cyan-300 opacity-30 rounded-full -mt-50"></div>
                                <div className="absolute hidden lg:flex  -ml-48 mt-32 -z-50  lg:w-14  lg:h-14 bg-yellow-400 opacity-80 rounded-full "></div>

                            </div>

                        </div>
                               
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
