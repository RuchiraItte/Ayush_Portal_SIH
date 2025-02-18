// import React, { useState } from "react";

// const images = [
//   { src: "../assets/ayush_logo.jpg", type: "FLOWERr" },
//   { src: "../assets/ayush_logo2.jpg", type: "NATURE" },
//   { src: "../assets/bannerimg1.jpg", type: "PLANT" },
//   { src: "../assets/bannerimg3.jpg", type: "NATURE" },
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="slider relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Main Image */}
//       <div className="list relative h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`item absolute inset-0 transition-opacity duration-700 ${
//               index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={image.src}
//               alt={image.type}
//               className="w-full h-full object-cover"
//             />
//             <div className="content absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4/5 max-w-4xl text-shadow-lg">
//               <h1 className="title text-5xl font-bold">{`MAGIC SLIDER`}</h1>
//               <p className="type text-5xl font-bold text-green-400">
//                 {image.type}
//               </p>
//               <p className="description mt-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Deleniti temporibus quis eum consequuntur voluptate quae
//                 doloribus distinctio.
//               </p>
//               <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-green-400">
//                 SEE MORE
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Thumbnails */}
//       <div className="thumbnail absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`item w-24 h-36 overflow-hidden rounded-lg cursor-pointer ${
//               index === currentIndex ? "ring-4 ring-green-400" : ""
//             }`}
//             onClick={() => goToSlide(index)}
//           >
//             <img
//               src={image.src}
//               alt={image.type}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="nextPrevArrows absolute top-1/2 w-full flex justify-between px-4">
//         <button
//           onClick={prevSlide}
//           className="prev w-12 h-12 bg-green-400 text-black font-bold rounded-full shadow hover:bg-white hover:text-black"
//         >
//           {"<"}
//         </button>
//         <button
//           onClick={nextSlide}
//           className="next w-12 h-12 bg-green-400 text-black font-bold rounded-full shadow hover:bg-white hover:text-black"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;



import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import Image1 from '../assets/ayushbanner-1.jpg';
import Image2 from '../assets/ayushbanner-2.jpg';
import Image3 from '../assets/ayushbanner-3.jpg';
import Image4 from '../assets/ayushbanner-4.jpg';
import Image5 from '../assets/ayushbanner-5.jpg';
import Image6 from '../assets/ayushbanner-6.jpg';
import 'swiper/css/pagination'

const Slider = () => {
  return (
    <div className=' '>
    <Swiper style={{
  "--swiper-pagination-color": "#FFFFFF",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-active-size": "200px",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
  "--swiper-navigation-color": "#FFFFFF"
}}
    spaceBetween={50}
    modules={[Pagination,Navigation,Autoplay]}
    slidesPerView={1}
    pagination={{clickable:true}}
    navigation
    loop={true}
    autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
    speed={1000}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    
    <SwiperSlide>
       <div className=' flex justify-center'>
        <img src={Image1} className=' w-full h-[460px]'/>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className=' flex justify-center'>
        <img src={Image2} className=' w-full h-[460px]'/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className=' flex justify-center relative'>
        <img src={Image3} className=' w-full h-[460px] '/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className=' flex justify-center'>
        <img src={Image4} className=' w-full h-[460px]'/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className=' flex justify-center'>
        <img src={Image5} className=' w-full h-[460px]'/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className=' flex justify-center'>
        <img src={Image6} className=' w-full h-[460px]'/>
      </div>
    </SwiperSlide>

  </Swiper></div>
  )
}

export default Slider