
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
