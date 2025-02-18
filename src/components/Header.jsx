import React from 'react'
import './styles/Header.css';
import logo from '../assets/ayush_logo.jpg';
import logo2 from '../assets/ayush_logo2.jpg';
import logo3 from '../assets/logo_hindiEnglish.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  function gochatbot()
  {
    window.location.href='/chatbot';
  }
  function gohome()
  {
    window.location.href='/';
  }
  function gohometwo()
    {
        window.location.href=`/login-register`;
    }

    // nav-items
  const navItems=[
    {path:"/",link:"Home"},
    // {path:"/about",link:"About Us"},
    {path:"/dashboard",link:"All Startups"},
    {path:"/Blogs",link:"Blogs"},
    {path:"/#faq",link:"FAQ's"},
    {path:"/contact",link:"Contact Us"},
  ]
 
    const navigate=useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  
  return (
  

    <div className=' fixed top-0 left-0 right-0 z-20 bg-white'>

      {/* top */}
      <div className=' flex justify-between max-w-[1300px] mx-auto py-3 bg-white'>

       {/* left side */}
        <div className=' flex items-center cursor-pointer' onClick={handleClick}>
          <div><img src={logo} width={30}/></div>
          <div className='flex items-center '>
            <img src={logo3} className=' h-[50px]' />
          </div>
        </div>

        {/* right side */}
        <div className=' flex items-center gap-6'>
            <div><p>Language</p></div>
            <div><button className=' bg-blue-400 py-1 px-3 rounded-md text-white'><Link to='/login-register'>Register/Login</Link></button></div>
            <div><img src={logo2} width={50}/></div>
        </div>
      </div>


      {/* bottom */}
      <div className="flex justify-center mx-auto items-center" 
  style={{ background: 'linear-gradient(to right, #343131, #A04747)' }}>
        <div className=' mx-20'>
        <nav className='py-4 px-4 '>
          {/* navItems */}
          <ul className='md:flex gap-12 text-sm hidden font-bold text-white'>
          {navItems.map(({ path, link }) => (
  <li key={link}>
    <NavLink
      to={path}
      onClick={() => {
        if (path.startsWith("/#")) {
          const id = path.split("#")[1];
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {link}
    </NavLink>
  </li>
))}

            </ul>
        </nav>
        </div>

        {/* chatbot */}
        {/* <div className=' mx-20'>
           <button className='bg-white px-2 py-1 rounded-md' onClick={gochatbot}>Chat Bot</button>
        </div> */}

      </div>


    </div>
   
  )
}



