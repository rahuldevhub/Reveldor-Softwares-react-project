import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from "../assets/whitelogo.png"

export default function Footer() {
    return (
      <div className="w-screen pt-3 lg-pt-10 bg-gray-800 text-white">
        <div className='text-2xl flex items-center justify-center lg:text-3xl w-4/5 mx-auto my-10 font-semibold'>
        <img className="h-72 -mb-28 -mt-32 lg:-my-32 lg:h-80" src={logo} alt="logo" />

        </div>
        {/* <div className='flex  lg:text-lg lg:ml-40 w-4/5 mx-auto font-medium justify-between lg:justify-between mb-10'>
          <div>
            <ul>
              <li className='lg:mb-4 mb-2'>Website Development</li>
              <li className='lg:mb-4 mb-2'>Penetration Testing</li>
              <li className='lg:mb-4 mb-2'>Training</li>
            </ul>
          </div>
          <div>
            <ul>
            <li className='lg:mb-4 mb-2'>App Development</li>
            <li className='lg:mb-4 mb-2'>UI / UX Design</li>
            <li className='lg:mb-4 mb-2'>Tech Support</li>
            </ul>
          </div>
        </div> */}
        <div className='flex  pb-5 lg:pb-8 lg:pt-5 justify-around w-4/5 items-center mx-auto'>
          <a href="https://www.instagram.com/rahul__reveldor/" target="_blank">   <InstagramIcon className='cursor-pointer ' fontSize='medium'/></a>
          <a href="https://twitter.com/RahulReveldor" target="_blank">    <TwitterIcon className='cursor-pointer' fontSize='medium'/></a>
          <a href="https://www.linkedin.com/in/rahul-reveldor-049b62237/" target="_blank">   <LinkedInIcon className='cursor-pointer' fontSize='medium'/></a>
          <a href="https://wa.me/+919489481336" target="_blank">    <WhatsAppIcon className='cursor-pointer' fontSize='medium'/></a>
          <a href="https://github.com/rahulreveldor" target="_blank">    <GitHubIcon className='cursor-pointer' fontSize='medium'/></a>
        </div>
        <div className='flex justify-center items-center py-5'>
        <a className="outline-none" href="mailto:reveldorsoftwares@gmail.com"><h1 className='lg:text-4xl text-2xl font-semibold'>Reveldorsoftwares@gmail.com</h1></a>
        </div>
        <div className='w-3/4 lg:w-2/4 mx-auto'>
          <ul className='flex justify-between pt-5 pb-10 items-center'>
          <a className="outline-none hover:underline underline-offset-4 lg:font-semibold" href="#home"><li className='cursor-pointer'>Home</li></a>
            <a className="outline-none hover:underline underline-offset-4 lg:font-semibold" href="#about"><li className='cursor-pointer'>About</li></a>
            <a className="outline-none hover:underline underline-offset-4 lg:font-semibold" href="#services"><li className='cursor-pointer'>Services</li></a>
            <a className="outline-none hover:underline underline-offset-4 lg:font-semibold" href="#contact"><li className='cursor-pointer'>Contact Us</li></a>
          </ul>
        </div>
      </div>
  
  
  
    )
  }
  
