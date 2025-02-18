// import React from 'react'
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { SwiperSlide } from 'swiper/react';
// import Slider from 'react-slick';
// import { PiX } from 'react-icons/pi';
// import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// const TeamsPatrons = () => {
//   var settings2 = {
//     dots: true,
    
//     arrows:true,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     autoplay:false,
//     autoplaySpeed:2000,
//     cssEase:"linear",
//     pauseOnHover:true,
//     pauseOnFocus:true,
//     // centerMode:true,
//     // centerSlidePercentage: 20, 
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
//       role:"VC",
//       img: "https://picsum.photos/101/101",
//     },
//     {
//       id: 2,
//       name: "Sahil",
//       role:"VC",
//       img: "https://picsum.photos/102/102",
//     },
//     {
//       id: 3,
//       name: "Srikanth",
//       role:"VC",
//       img: "https://picsum.photos/104/104",
//     },
//     {
//       id: 4,
//       name: "karana",
//       role:"VC",
//       img: "https://picsum.photos/103/103",
//     },
//     {
//       id: 5,
//       name: "farhan",
//       role:"VC",
//       img: "https://picsum.photos/104/104",
//     },
//     {
//       id: 6,
//       name: "Kaustubh",
//       role:"VC",
//       img: "https://picsum.photos/103/103",
//     },
//   ]

//   // const TestimonialsData = [
//   //   {
//   //     id: 1,
//   //     name: "Ruchira",
//   //     role: "VC",
//   //     img: image1,
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Sahil",
//   //     role: "VC",
//   //     img: image2,
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Srikanth",
//   //     role: "VC",
//   //     img: image3,
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Karana",
//   //     role: "VC",
//   //     img: image4,
//   //   },
//   //   {
//   //     id: 5,
//   //     name: "Farhan",
//   //     role: "VC",
//   //     img: image5,
//   //   },
//   //   {
//   //     id: 6,
//   //     name: "Kaustubh",
//   //     role: "VC",
//   //     img: image6,
//   //   },
//   // ];
  

//   return (
//     <div className=' max-w-[1300px] mx-auto py-16 pb-24'>
//       <div className=' text-center'>
//         <h1 className=' text-orange-500 '>Ministry of Ayush</h1>
//         <p className=' text-4xl pt-4'>Patrons & Teams</p>
//       </div>

//       <div className='  flex flex-col justify-between max-w-[900px]  mx-auto'>
//       <Slider {...settings2}>         
//                   {
//                    TestimonialsData.map((data)=>(
//                      <div className='mt-20 mb-2 text-center w-[80%] h-[250px] mx-auto flex justify-center '>
            
//                      <div key={data.id} className=' relative border-2 flex flex-col shadow-md  border-gray-400 rounded-md w-[80%] h-[250px] mx-auto bg-blue-100 dark:bg-gray-900'>
                     
//                            <div className='h-full' >
//                              <img src={data.img} className='  rounded-md w-full h-full mx-auto' />
//                            </div>
                
//                            <div className=' bg-white mx-4 py-2 rounded-md shadow-md absolute w-[90%] bottom-2 -left-1 right-0 '>
//                               <div className='flex flex-col gap-3'>
//                                  <p className=' dark:text-white font-semibold text-blue-800'>{data.name}</p>
//                               </div>
//                               <div className='flex flex-col gap-3 pt-1'>
//                                  <p className=' dark:text-white font-semibold text-sm'>{data.role}</p>
//                               </div>
//                                  <div className='flex justify-center gap-4 mt-3'>
//                                     <FaWhatsapp size={20}/>
//                                     <FaTwitter size={20}/>
//                                     <FaFacebook size={20}/>
//                                     <FaLinkedin size={20}/>
//                                  </div>
//                            </div>
            
                       
//                      </div>  
//                      </div>
//                    ))
//                   }
//                  </Slider>

//             {/* <Slider {...settings2}>
//             {
//                    TestimonialsData.map((data)=>(
//                      <div key={data.id} className=' bg-blue-300 w-[95%] h-[400px] mx-auto flex gap-10'>
//                           <div><img src={data.img} className=' max-w-[80px] mx-auto'/></div>
//                      </div>
//                    ))
//                   }
//             </Slider> */}

//       </div>
//     </div>
//   )
// }

// export default TeamsPatrons



// waste
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import Image6 from '../assets/StartupCard.png';
import Image3 from '../assets/DocumentCard.png';
import Image4 from '../assets/StartupCard.png';
import Image5 from '../assets/bannerimg1.jpg';
import 'swiper/css/pagination'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const TeamsPatrons = () => {
  return (
    <div className=' max-w-[1350px] mx-auto pb-20 pt-10'>
    <div className='  py-4'>
      <p>Ministry of Ayush</p>
      <p className=' text-3xl'>Teams & Patrons</p>
    </div>
    <Swiper style={{
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "10px",
  "--swiper-pagination-bullet-active-size": "120px",
  "--swiper-pagination-bullet-horizontal-gap": "10px",
  "--swiper-navigation-color": "#FFBA08",
  "--swiper-navigation-background":"#ffffff"
}}
    spaceBetween={50}
    modules={[Pagination,Navigation,Autoplay]}
    slidesPerView={3}
    centeredSlides={true}
    grabCursor={true}
    pagination={{clickable:true}}
    navigation
    loop={true}
    // autoplay={{delay:3000}}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className=' px-10 pb-10 pt-10'
    breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
  >
 

    
    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image3} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Ruchira Itte</p>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Frontend</p>
                 
              </div>
               <div className=' bg-white mx-3 mb-2 py-4 absolute bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all '>
                   <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Ruchira</p>
                   <p className='flex flex-col h-full text-[15px] text-center text-blue-800'>Frontend Developer</p>
                   <div className=' flex gap-5 justify-center items-center py-3'>
                     <p><FaWhatsapp size={25}/></p>
                     <p><FaInstagram size={25}/></p>
                     <p><FaTwitter size={25}/></p>
                   </div>
                   <button className=' text-center flex justify-center items-center w-[30%] mx-auto'>Contact</button>
               </div>
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image5} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Sahil Shah</p>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Frontend</p>
                 
              </div>
               <div className=' bg-white mx-3 mb-2 py-4 absolute bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all '>
                   <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Sahil Shah</p>
                   <p className='flex flex-col h-full text-[15px] text-center text-blue-800'>Frontend Developer</p>
                   <div className=' flex gap-5 justify-center items-center py-3'>
                     <p><FaWhatsapp size={25}/></p>
                     <p><FaInstagram size={25}/></p>
                     <p><FaTwitter size={25}/></p>
                   </div>
                   <button className=' text-center flex justify-center items-center w-[30%] mx-auto'>Contact</button>
               </div>
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image6} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Farhan</p>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Frontend</p>
                 
              </div>
               <div className=' bg-white mx-3 mb-2 py-4 absolute bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all '>
                   <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Farhan</p>
                   <p className='flex flex-col h-full text-[15px] text-center text-blue-800'>Frontend Developer</p>
                   <div className=' flex gap-5 justify-center items-center py-3'>
                     <p><FaWhatsapp size={25}/></p>
                     <p><FaInstagram size={25}/></p>
                     <p><FaTwitter size={25}/></p>
                   </div>
                   <button className=' text-center flex justify-center items-center w-[30%] mx-auto'>Contact</button>
               </div>
          </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image4} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Karana</p>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Frontend</p>
                 
              </div>
               <div className=' bg-white mx-3 mb-2 py-4 absolute bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all '>
                   <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Karana</p>
                   <p className='flex flex-col h-full text-[15px] text-center text-blue-800'>Frontend Developer</p>
                   <div className=' flex gap-5 justify-center items-center py-3'>
                     <p><FaWhatsapp size={25}/></p>
                     <p><FaInstagram size={25}/></p>
                     <p><FaTwitter size={25}/></p>
                   </div>
                   <button className=' text-center flex justify-center items-center w-[30%] mx-auto'>Contact</button>
               </div>
          </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image4} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Srikanth</p>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Frontend</p>
                 
              </div>
               <div className=' bg-white mx-3 mb-2 py-4 absolute bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all '>
                   <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Srikanth</p>
                   <p className='flex flex-col h-full text-[15px] text-center text-blue-800'>Frontend Developer</p>
                   <div className=' flex gap-5 justify-center items-center py-3'>
                     <p><FaWhatsapp size={25}/></p>
                     <p><FaInstagram size={25}/></p>
                     <p><FaTwitter size={25}/></p>
                   </div>
                   <button className=' text-center flex justify-center items-center w-[30%] mx-auto'>Contact</button>
               </div>
          </div>
      </div>
    </SwiperSlide>
    <SwiperSlide className='w-full h-[300px] hover:scale-105 transition-transform duration-300 '>
      <div className=' flex justify-center relative z-1 '>
          <div className=' w-full'>
              <img src={Image4} className=' w-full h-[300px] backdrop-blur-md '/>
              <div className=' bg-white mx-3 mb-2 absolute bottom-0 left-0 right-0 shadow-lg py-3'>
                 <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Kaustubh</p>
                 <p className='flex flex-col h-full text-[20px] text-center text-blue-800'>Frontend</p>
                 
              </div>
               <div className=' bg-white mx-3 mb-2 py-4 absolute bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:backdrop-blur-[15px] transition-all '>
                   <p className='flex flex-col h-full text-[30px] text-center text-blue-800'>Kaustubh</p>
                   <p className='flex flex-col h-full text-[15px] text-center text-blue-800'>Frontend Developer</p>
                   <div className=' flex gap-5 justify-center items-center py-3'>
                     <p><FaWhatsapp size={25}/></p>
                     <p><FaInstagram size={25}/></p>
                     <p><FaTwitter size={25}/></p>
                   </div>
                   <button className=' text-center flex justify-center items-center w-[30%] mx-auto'>Contact</button>
               </div>
          </div>
      </div>
    </SwiperSlide>

    

  {/* <div className='swiper-pagination mt-20'></div> */}
  </Swiper>
  </div>
  )
}

export default TeamsPatrons


