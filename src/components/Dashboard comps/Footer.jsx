// import '../styles/Footer.css';
// function Footer() {
//   return (
//     <div className=' ' >	
//    <footer className="px-4 divide-y text-white" style={{ background: 'linear-gradient(to right, #343131, #343131)' }}>
// 	<div className=" max-w-[1300px]  flex flex-col justify-between py-6 mx-auto space-y-8 lg:flex-row lg:space-y-0">
// 		<div className="lg:w-1/3">
// 			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
// 				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
					
// 				</div>
// 				<span className="self-center text-2xl font-semibold"> AYUSH Startup</span>
// 			</a>
// 		</div>
// 		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
// 			<div className="space-y-3">
// 				<h3 className="tracking-wide uppercase ">Product</h3>
// 				<ul className="space-y-1">
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Features</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Integrations</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Pricing</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">FAQ</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-3">
// 				<h3 className="tracking-wide uppercase ">Company</h3>
// 				<ul className="space-y-1">
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Privacy</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Terms of Service</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-3">
// 				<h3 className="uppercase ">Developers</h3>
// 				<ul className="space-y-1">
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Public API</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Documentation</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Guides</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-3">
// 				<div className="uppercase ">Social media</div>
// 				<div className="flex justify-start space-x-3">
// 					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
// 					</a>
// 					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						
// 					</a>
// 					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="py-2 text-sm text-center ">© 2024 TechWorkers. All rights reserved.</div>
// </footer>

		
//     </div>
   
//   )
// }
// export default Footer;

import React from 'react'
import logo from '../../assets/ayush_logo2.jpg'
import { FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
	return (
		<div style={{ background: 'linear-gradient(to right, #343131, #343131)' }}>
			<div className=' max-w-[1300px]  mx-auto pt-10 text-white' >
			<div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-10 pb-5'>
				{/* fisrt */}
				<div className=' flex flex-col justify-center items-center gap-2'>
					<h1 className=' py-2 text-white text-xl'>AYUSH Startup</h1>
					<img src={logo} className='w-[100px]'/>
				</div>

				{/* second */}
				<div>
					<div><h1 className=' py-2 text-white text-xl'>Quick Links</h1></div>
					<div className=' flex flex-col justify-center items-center gap-2'>
						<p className=' text-gray-400'>Home</p>
						<p className=' text-gray-400'>FAQ</p>
						<p className=' text-gray-400'>login</p>
						<p className=' text-gray-400'>Register</p>
					</div>
				</div>

				{/* third */}
				<div>
					<div><h1 className=' py-2 text-white text-xl'>Developrs</h1></div>
					<div className=' flex flex-col justify-center items-center gap-2'>
						<p className=' text-gray-400'>Quick API</p>
						<p className=' text-gray-400'>Documentation</p>
						<p className=' text-gray-400'>Guides</p>
					</div>
				</div>

				{/* fourth */}
				<div>
					<div><h1 className=' py-2 text-white text-xl'>Social Media</h1></div>
					<div className=' flex justify-center gap-3'>
						<FaWhatsapp size={25}/>
						<FaTwitter size={25}/>
						<FaInstagram size={25}/>
						<FaLinkedin size={25}/>
					</div>
				</div>

			</div>
			<hr className=' pt-2'/>
			<div className=' py-2 text-center'>
				<p> © 2024 TechWorkers. All rights reserved.</p>
			</div>
		</div>
		</div>
	)
}

export default Footer