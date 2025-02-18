// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import Image1 from '../assets/ayurveda.png';
// import Image2 from '../assets/siddha.png';
// import Image3 from '../assets/unani.png';
// import Image4 from '../assets/sowa-rigpa.png';
// import Image5 from '../assets/yoga.png';
// import Image6 from '../assets/homeopathy.png';


// const servicesData = [
//   {
//     title: 'Ayurveda',
//     description: 'An ancient Indian system of medicine focused on balancing the body\'s energies (doshas) to achieve health. It utilizes herbs, diet, massage, and lifestyle practices to promote physical and mental wellness.',
//     image:Image1
//   },
//   {
//     title: 'Siddha',
//     description: 'Originating in South India, Siddha medicine aims for spiritual and physical perfection. It uses herbal, mineral, and animal-based preparations along with diet and lifestyle changes to treat various ailments.',
//     image:Image2

//   },
//   {
//     title: 'Unani',
//     description: 'A holistic medical system with roots in Greek medicine, focusing on the balance of bodily humors. It uses natural remedies, diet, and lifestyle modifications to treat diseases and promote overall wellness.',
//     image:Image3

//   },
//   {
//     title: 'Sowa-Rigpa',
//     description: 'Traditional medicine of the Himalayan regions, practiced mainly by Amchis. It combines herbal medicine, dietary guidelines, and physical therapies to restore balance and health.',
//     image:Image4

//   },
//   {
//     title: 'Yoga & Naturopathy',
//     description: 'Yoga promotes the union of mind, body, and spirit through physical postures and breathing exercises. Naturopathy uses natural therapies, diet, and detoxification to stimulate the body’s self-healing mechanisms.',
//     image:Image5

//   },
//   {
//     title: 'Homeopathy',
//     description: 'Developed by Dr. Samuel Hahnemann, this system is based on the principle "like cures like." It uses highly diluted substances to trigger the body\'s natural healing response, especially effective for chronic conditions.',
//     image:Image6
//   }
// ];

// const Services = () => {
//   return (
//     <div className='mx-auto max-w-[1300px] pt-10 pb-20'>
//       <div className='text-center font-bold text-4xl py-5'>Our services</div>

//       <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10'>
//         {servicesData.map((service, index) => (
//           <div key={index} className='bg-white border-2 border-gray-400 shadow-md flex py-2 pr-5'>
//             <div className='flex items-start'>
//               <img src={service.image} className=' w-[250px]'/>
//             </div>
//             <div className='flex flex-col gap-2'>
//               <h2 className='text-[20px] text-blue-900 font-bold'>{service.title}</h2>
//               <p className='text-[13px] text-justify text-gray-600'>{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image1 from '../assets/ayurveda.png';
import Image2 from '../assets/siddha.png';
import Image3 from '../assets/unani.png';
import Image4 from '../assets/sowa-rigpa.png';
import Image5 from '../assets/yoga.png';
import Image6 from '../assets/homeopathy.png';
import './styles/Home.css';


const servicesData = [
  {
    title: 'Ayurveda',
    description: 'An ancient Indian system of medicine focused on balancing the body\'s energies (doshas) to achieve health. It utilizes herbs, diet, massage, and lifestyle practices to promote physical and mental wellness.',
    image:Image1
  },
  {
    title: 'Siddha',
    description: 'Originating in South India, Siddha medicine aims for spiritual and physical perfection. It uses herbal, mineral, and animal-based preparations along with diet and lifestyle changes to treat various ailments.',
    image:Image2

  },
  {
    title: 'Unani',
    description: 'A holistic medical system with roots in Greek medicine, focusing on the balance of bodily humors. It uses natural remedies, diet, and lifestyle modifications to treat diseases and promote overall wellness.',
    image:Image3

  },
  {
    title: 'Sowa-Rigpa',
    description: 'Traditional medicine of the Himalayan regions, practiced mainly by Amchis. It combines herbal medicine, dietary guidelines, and physical therapies to restore balance and health.',
    image:Image4

  },
  {
    title: 'Yoga & Naturopathy',
    description: 'Yoga promotes the union of mind, body, and spirit through physical postures and breathing exercises. Naturopathy uses natural therapies, diet, and detoxification to stimulate the body’s self-healing mechanisms.',
    image:Image5

  },
  {
    title: 'Homeopathy',
    description: 'Developed by Dr. Samuel Hahnemann, this system is based on the principle "like cures like." It uses highly diluted substances to trigger the body\'s natural healing response, especially effective for chronic conditions.',
    image:Image6
  }
];

const Services = () => {
  return (
    <div className='bg-orange-100'>
      <div className='mx-auto max-w-[1300px] pt-10 pb-20 '>
      <div className='text-center font-bold text-4xl py-5'>Our services</div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-16 gap-16 '>
        {servicesData.map((service, index) => (

          <div id='card' key={index} className='flex flex-col bg-stone-300 w-[370px] h-[235px] relative border-2 border-black'>
            <div className='flex flex-col items-center justify-center h-[200px]'>
              <img src={service.image} className=' w-[160px] '/>
              <h2 className='text-[30px] text-blue-900 font-bold'>{service.title}</h2>
            </div>

            <div className='p-3 flex flex-col gap-2 absolute w-full bottom-0 bg-slate-500' id='intro'>
              <p className='text-[30px] text-blue-900 font-bold text-center'>{service.title}</p>
              <p className='text-[12px] text-justify text-white '>{service.description}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
