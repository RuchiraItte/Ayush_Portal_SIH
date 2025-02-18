import React from 'react'


import aboutus1 from '../assets/homeimage1.jpg'
import aboutus2 from '../assets/homeimage2.jpg'
import { BsFillCake2Fill } from "react-icons/bs";
import { GiChestnutLeaf, GiCupcake } from "react-icons/gi";
import { SiCakephp, SiSearxng } from "react-icons/si";
import { GiCakeSlice } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import { HiArrowCircleRight } from 'react-icons/hi';
import Image1 from '../assets/homeimage2.jpg'
import { MdEmergencyShare, MdVaccines } from 'react-icons/md';
import { FaDroplet, FaHandsBound } from 'react-icons/fa6';

const About = () => {
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true, 
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToScroll:1,
          slidesToShow:5,
          infinite:true
        }
      },
      {
        breakpoint:1020,
        settings:{
          slidesToScroll:1,
          slidesToShow:3,
          initialSlide:2
        }
      },
      {
        breakpoint:640,
        settings:{
          slidesToScroll:1,
          slidesToShow:1,
          // infinite:true
        }
      },
    ]
  };

   const TestimonialsData=[
    {
      id: 1,
      name: "Ruchira",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Srikanth",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Sahil",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 4,
      name: "karana",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 5,
      name: "farhan",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 6,
      name: "Kaustubh",
      img: "https://picsum.photos/103/103",
    },
  ]



  return (
    <div className='mx-auto max-w-[1300px] z-[-10]' id='about-us'>
     

      <div className=' py-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>

              {/* left */}
             <div  className='w-[85%] h-[400px] sm:mx-0 mx-auto flex justify-center items-center relative'>
                
                <div className=' bg-orange-200 dark:bg-primary/80 xl:w-[540px] w-[200px] h-[380px] shadow-md'>
                    <img src={Image1} className='h-[380px]'/>
                </div>

                <div className='absolute right-[-20px] top-10'>
                    <div className=' bg-white dark:bg-primary/80 border-[10px] border-gray-300 p-2 rounded-md '>
                        <div class="flex -space-x-4 rtl:space-x-reverse">
                            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
                            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt=""/>
                            <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-orange-400 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#"><span className=' text-[25px] text-center'>+</span></a>
                         </div>
                         <p className=' text-[13px]'>Trusted By</p>
                         <p className=' text-[13px]'> 20+ Start-ups</p>
                    </div>
                </div>
             </div>


            {/* rigght */}
             <div data-aos="fade-up" data-aos-delay="300"  className='w-[100%] flex flex-col justify-center items-center '>
             <div className='flex flex-col gap-2'>
                <p className='mt-2 text-primary font-semibold'>About Us</p>

                <h2 className='sm:text-4xl text-2xl font-semibold text-black'>Your Trusted Platform For Success</h2>
                <p className=' text-gray-500 dark:text-gray-400 xl:text-[15px] lg:text-[13px] lg:block hidden'> The Ministry of Ayush was formed on the 9th of November 2014 to promote the traditional Indian systems of medicine, including Ayurveda, Yoga, Naturopathy, Unani, Siddha and Homeopathy. Its mission is to integrate these systems into mainstream healthcare, promote research, and enhance public awareness about holistic wellbeing. The Ayush ministry approaches with a vision that harmonizes ancient wisdom with a contemporary well-being, emphasizing natural remedies, lifestyle modifications, hence fostering a healthier nation worldwide. .</p>
             </div>



             {/* <div className='grid sm:grid-cols-2 grid-cols-2 mt-3 bg-slate-30 sm:ml-0 ml-6 w-full'>

<div className='flex flex-col gap-5 justify-start'>

<div>
  <div className='flex items-center gap-2'>
     <HiArrowCircleRight className='w-10 h-10 bg-blue-400 text-white rounded-full p-2'/>

     <p className='sm:text-md font-semibold dark:text-white '>Investors</p>
  </div>
</div>
<div>
  <div className='flex items-center gap-2'>
     <HiArrowCircleRight className='w-10 h-10 bg-blue-400 text-white rounded-full p-2'/>
     <p className='sm:text-md font-semibold dark:text-white'>Comfortable Registration</p>
  </div>
</div>
  
</div>

<div className='flex flex-col gap-5'>

<div>
  <div className='flex items-center gap-2'>
     <HiArrowCircleRight className='w-10 h-10 bg-blue-400 text-white rounded-full p-2'/>
     <p className='sm:text-md font-semibold dark:text-white'>Easy Online Access</p>
  </div>
</div>
<div>
  <div className='flex items-center gap-2'>
     <HiArrowCircleRight className='w-10 h-10 bg-blue-400 text-white rounded-full p-1'/>
     <p className='sm:text-md font-semibold dark:text-white'>Always Monitored</p>
  </div>
</div>
  
</div>

             </div> */}



             <div className=' flex my-5 gap-7'>

                  <div className='w-[80px] text-center '>
                      <div className=' bg-orange-300 flex justify-center px-5 py-7 rounded-lg text-center'><MdVaccines size={40} color=' white'/></div>
                      <div><h1 className=' mt-1 text-sm'>Vacination</h1></div>
                  </div>

                  <div className=' w-[80px] text-center '>
                      <div className=' bg-pink-800 flex justify-center px-5 py-7 rounded-lg'><SiSearxng size={40} color=' white'/></div>
                      <div><h1 className=' mt-1 text-sm'>Search</h1></div>
                  </div>
                  <div className='w-[80px] text-center  '>
                      <div className=' bg-green-500 flex justify-center px-5 py-7 rounded-lg'><GiChestnutLeaf size={40} color=' white'/></div>
                      <div><h1 className=' mt-1 text-sm'>Ayurveda</h1></div>
                  </div>
                  <div className=' w-[80px] text-center '>
                      <div className=' bg-blue-800 flex justify-center px-5 py-7 rounded-lg'><FaDroplet size={40} color=' white'/></div>
                      <div><h1 className=' mt-1 text-sm'>Blood Donation</h1></div>
                  </div>
                  <div className='w-[80px] text-center  '>
                      <div className=' bg-stone-500 flex justify-center px-5 py-7 rounded-lg'><FaHandsBound size={40} color=' white'/></div>
                      <div><h1 className=' mt-1 text-sm'>Care</h1></div>
                  </div>
                  <div className=' w-[80px] text-center '>
                      <div className=' bg-teal-600 flex justify-center px-5 py-7 rounded-lg'><MdEmergencyShare size={40} color=' white'/></div>
                      <div><h1 className=' mt-1 text-sm'>Emergency</h1></div>
                  </div>

                
                  
             </div>

               
             </div>

          </div>
      </div>


    </div>
  )
}

export default About
