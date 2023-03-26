import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import ss1 from "../assets/ss1.jpg"
import ss3 from "../assets/ss3.jpg"
import ss2 from "../assets/ss2.jpg"

import ss4 from "../assets/ss4.jpg"
import '../css/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className="w-full outline-none "
    >
      <SwiperSlide className=''>
        <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96'>
        <img className='h-4/5' src={ss1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96'>
        <img className='h-4/5' src={ss2} alt="" />
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className='lg:w-2/3  mx-auto flex justify-center object-contain h-full bg-gray-200'>
        <img className='h-4/5' src={ss3} alt="" />
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96'>
        <img className='h-4/5' src={ss3} alt="" />
        </div>
      </SwiperSlide>
       <SwiperSlide>
       <div className='lg:w-2/3 flex justify-center object-contain mx-auto h-48 lg:h-96'>
       <img className='h-4/5' src={ss4} alt="" />
       </div>
     </SwiperSlide>
      
   
    </Swiper>
  );
};