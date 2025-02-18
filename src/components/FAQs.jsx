import React from "react";
import './styles/FAQs.css';  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/homeimage1.jpg';
import Image2 from '../assets/homeimage2.jpg';
import Image3 from '../assets/homeimage3.jpg';

const ImageList = [
  { id: 1, image: Image1 },
  { id: 2, image: Image2 },
  { id: 3, image: Image3 },
];

const FAQ = (props) => {
  const faqData = props.faqdata;

  var settings = {
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true, 
  };

  return (
    <div className="faq-wrapper max-w-[1300px] mx-auto py-8">
      <div className="faq-card bg-white rounded-lg shadow-md p-6">
        {/* Heading */}
        <h1 className="text-center text-3xl font-semibold text-primary mb-8">
          Frequently Asked Questions - {props.who}
        </h1>

        <div className="faq-content flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="slider-container w-full lg:w-[45%]">
            <h2 className="text-center text-2xl font-semibold text-primary mb-4">
              Achievements
            </h2>
            <Slider {...settings}>
              {ImageList.map((data) => (
                <div key={data.id} className="slider-item">
                  <img src={data.image} alt={`Achievement ${data.id}`} className="slider-image mx-auto" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Section */}
          <div className="faq-container w-full lg:w-[55%]">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item group">
                <p className="faq-question">
                  {item.question}
                </p>
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;