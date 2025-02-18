import React, { useState } from "react";
import "./styles/Home.css";
import "./styles/LoginRegister.css"; // Include the custom enhancements
import startup from "../assets/startup.svg";
import authori from "../assets/lauthority.jpg";
import drugins from "../assets/drugins.svg";
import Header from "./Header";
import Footer from "./Dashboard comps/Footer";
import Image1 from "../assets/StartupCard.png";
import Image2 from "../assets/StartupCard.png";
import Image3 from "../assets/StartupCard.png";
import Image4 from "../assets/StartupCard.png"; // Add new image for Investors
import Image5 from "../assets/StartupCard.png"; // Add new image for Incubators

const LoginRegister = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <>
      <Header />
      <div className="flex justify-between px-10 py-5 items-center">
        <h1 className="text-2xl font-bold">
          Welcome to the Ayush Startup Registration Portal
        </h1>
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded-md"
          onClick={toggleDarkMode}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <div className="flex justify-center gap-10 mt-16 mb-16 flex-wrap">
        {[
          {
            image: Image1,
            title: "Startup Applicant",
            onSignUp: () => goTo("/signupstartup"),
            onLogin: () => goTo("/login?value=startup"),
          },
          {
            image: Image2,
            title: "Government Authority",
            onSignUp: () => goTo("/signupauthority"),
            onLogin: () => goTo("/login?value=authority"),
          },
          {
            image: Image3,
            title: "Document Inspector",
            onSignUp: () => goTo("/signupdrug"),
            onLogin: () => goTo("/login?value=druginspector"),
          },
        ].map(({ image, title, onSignUp, onLogin }, index) => (
          <div
            key={index}
            className="card border-2 border-gray-300 shadow-lg w-[330px] h-[400px] flex flex-col justify-center items-center rounded-lg relative"
          >
            <div className="w-full h-[200px]">
              <img
                src={image}
                alt={`${title} Image`}
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                className="btn-primary bg-blue-600 text-white py-2 px-4 rounded-md"
                onClick={onSignUp}
              >
                Sign Up
              </button>
              <button
                className="btn-secondary bg-white text-black border-2 border-gray-800 py-2 px-4 rounded-md"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
            <span className="tooltip">Click to navigate</span>
          </div>
        ))}
      </div>
      <div className="organization-section text-center mt-10 mb-10">
        <h2 className="text-xl font-bold">Organizations</h2>
      </div>
      <div className="flex justify-center gap-10 mt-10 mb-20 flex-wrap">
        {[
          {
            image: Image4,
            title: "Investors",
            onSignUp: () => goTo("/signupinvestor"),
            onLogin: () => goTo("/login?value=investor"),
          },
          {
            image: Image5,
            title: "Incubators",
            onSignUp: () => goTo("/signupincubator"),
            onLogin: () => goTo("/login?value=incubator"),
          },
        ].map(({ image, title, onSignUp, onLogin }, index) => (
          <div
            key={index}
            className="card border-2 border-gray-300 shadow-lg w-[330px] h-[400px] flex flex-col justify-center items-center rounded-lg relative"
          >
            <div className="w-full h-[200px]">
              <img
                src={image}
                alt={`${title} Image`}
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                className="btn-primary bg-blue-600 text-white py-2 px-4 rounded-md"
                onClick={onSignUp}
              >
                Sign Up
              </button>
              <button
                className="btn-secondary bg-white text-black border-2 border-gray-800 py-2 px-4 rounded-md"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
            <span className="tooltip">Click to navigate</span>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default LoginRegister;
