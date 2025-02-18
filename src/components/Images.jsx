// import React, { useState, useEffect } from 'react';
// // Import your local images
// // import Image1 from '../assets/bannermain.jpg';
// // import Image4 from '../assets/bannerimg1.jpg';
// // import Image3 from '../assets/bannerimg3.jpg';
// import '../components/styles/Images.css'

// // new
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image1 from '../assets/homeimage1.jpg'
// import Image2 from '../assets/homeimage2.jpg'
// import Image3 from '../assets/homeimage1.jpg'

// import landingimage from '../assets/AyurvedaLandingImage.png'

// const ImageList=[
//   {id:1,image:Image1},
//   {id:2,image:Image2},
//   {id:3,image:Image3},
// ]
// //new 

// const Images = () => {
//   var settings = {
//     // dots: true,
//     arrows:false,
//     infinite: true,
//     speed: 800,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed:3000,
//     cssEase:"ease-in-out",
//     pauseOnHover:false,
//     pauseOnFocus:true, 
//   };

//   var settings2 = {
//     // dots: true,
    
//     arrows:true,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     autoplay:false,
//     autoplaySpeed:2000,
//     cssEase:"linear",
//     pauseOnHover:true,
//     pauseOnFocus:true, 
//     responsive:[
//       {
//         breakpoint:10000,
//         settings:{
//           slidesToScroll:1,
//           slidesToShow:3,
//           infinite:true
//         }
//       },
//       {
//         breakpoint:1020,
//         settings:{
//           slidesToScroll:1,
//           slidesToShow:3,
//           initialSlide:2
//         }
//       },
//       {
//         breakpoint:640,
//         settings:{
//           slidesToScroll:1,
//           slidesToShow:1,
//           // infinite:true
//         }
//       },
//     ]
//   };

//   const TestimonialsData=[
//     {
//       id: 1,
//       name: "Ruchira",
//       img: "https://picsum.photos/101/101",
//     },
//     {
//       id: 2,
//       name: "Sahil",
//       img: "https://picsum.photos/102/102",
//     },
//     {
//       id: 3,
//       name: "Srikanth",
//       img: "https://picsum.photos/104/104",
//     },
//     {
//       id: 4,
//       name: "karana",
//       img: "https://picsum.photos/103/103",
//     },
//     {
//       id: 5,
//       name: "farhan",
//       img: "https://picsum.photos/104/104",
//     },
//     {
//       id: 6,
//       name: "Kaustubh",
//       img: "https://picsum.photos/103/103",
//     },
//   ]



  

//   return (
//     <div id=''  className='min-h-[550px] mt-20 sm:min-h-[650px] pb-20 flex justify-center items-center dark:text-white duration-200'>
      

//        {/* hero section */}
//       <div className='max-w-[1300px] pb-8 sm:pb-0 grid sm:grid-cols-2 grid-cols-1 mt-20'>

      

//           <div className='w-[80%] mx-auto  sm:text-left text-center flex flex-col'>
//                   <div className='flex flex-col gap-5'>
//                     <h2 className='text-3xl xl:text-[50px] xl:leading-[55px] font-semibold sm:mt-0 mt-5 text-black'>AYUSH<br/> AYURVEDA</h2>
//                     <p className='sm:flex hidden text-sm text-black'>Welcome to the AYUSH Startup Registration Portal, an initiative by the Ministry of AYUSH to foster innovation, streamline processes, and empower entrepreneurs in the AYUSH sector.</p>
//                      <div className='flex gap-5 mx-auto sm:mx-0 mb-5'>
//                        {/* <button className='bg-primary/70 py-1 px-4 rounded-md'>SignUp Now</button> */}
//                        <button className ='bg-[#343131] text-white py-1 px-4 rounded-md'>Contact Us</button>
//                      </div>

//                   </div>

//                   <div className=' bg-blue-200 px-8'>
//                   <Slider {...settings2}>
                  
//                   {
//                    TestimonialsData.map((data)=>(
//                      <div className='mt-20 mb-2 text-center mx-auto'>
            
//                      <div key={data.id} className=' border-2 flex p-2 flex-col rounded-xl w-[95%] mx-auto  bg-white dark:bg-gray-900 relative shadow-xl'>
                     
//                        <div className=' h-[80px] -mb-8' >
//                          <img src={data.img} className='  rounded-md border-2 border-orange-400 max-w-[80px]  block mx-auto transform -translate-y-12' />
//                        </div>
            
//                        <div className='flex flex-col gap-3'>
//                           <p className=' dark:text-white font-semibold'>{data.name}</p>
                       
//                        </div>
            
                       
//                      </div>
            
//                      </div>
//                    ))
//                   }
//                  </Slider>
                  

//                   </div>

//           </div>


//           <div data-aos="zoom-in" data-aos-once="true" className='z-[-10px]  my-auto'>
          
//                   <div className='flex justify-center items-center  '>
//                     <img src={landingimage} className=' sm:w-[630px]  object-contain mx-auto'/>
//                   </div>
               
        
          
//           </div>

//       </div>

//     </div>
//   )
// };

// export default Images;

import React from "react";

const Images = () => {
  const ads = [
    "Buy one, get one free on selected items!",
    "Exclusive deals on electronics, up to 50% off!",
    "Hurry! Limited-time offers available now!",
  ];

  return (
    <div className="w-full bg-white text-black py-[8px] overflow-hidden mt-32">
      <div className="flex animate-scroll">
        {/* Duplicate the ads to create a seamless loop */}
        {[...ads, ...ads].map((ad, index) => (
          <span
            key={index}
            className="text-sm font-semibold whitespace-nowrap mx-4"
          >
            {ad}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Images;
