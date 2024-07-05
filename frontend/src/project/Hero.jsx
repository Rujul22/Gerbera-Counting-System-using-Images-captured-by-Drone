import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Carousel } from "flowbite-react";
const Hero = () => {
  const [text] = useTypewriter({
    /* Config */
    words: ["Farms", "Floristry"],
    loop: {},
    typeSpeed: 200,
  });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("userInfo"); // Check if user is logged in
    if (isLoggedIn) {
      // If user is logged in, redirect to the specified link
      window.open("https://detectt.streamlit.app/Object_Detection_-_Roboflow_Train", "_blank"); // Replace "/specified-link" with your desired route
    } else {
      // If user is not logged in, display a notification or perform any other action
      alert("Please log in to Get Started!!");
      // You can customize the notification or use any other UI element/modal/dialog
    }
  };

  return (
    <div className="h-[90vh]">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-green-100 dark:bg-gray-700 dark:text-white">
          <div className="text-black">
            <div className="max-w-[1000px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center">
              <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
                Automate Flower Counting
              </h1>
              <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                  using Drone Easy for
                </p>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-1 text-primary">
                  {text}
                </p>
                <span className="md:text-5xl sm:text-4xl text-xl font-bold text-primary">
                  <Cursor cursorStyle="|" />
                </span>
              </div>
              <p className="md:text-2xl text-xl font-bold text-gray-500 ">
                Effortlessly user-friendly, making tasks easy
              </p>
              {/* <button className="w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 ease-in-out duration-300"  style={{ backgroundColor: '#4CAF50'}}onClick={handleGetStarted}>
        <a href="https://gerberadetection.streamlit.app" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Get Started</a>
        </button> */}
              <button
                className="w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 ease-in-out duration-300"
                style={{ backgroundColor: "#4CAF50" }}
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* 2nd SLide */}
        <div className="flex h-full items-center justify-center bg-green-100 dark:bg-gray-700 dark:text-white">
          <div className="max-w-[1000px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
              Achieve Realtime Counting
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                accurate & Easy for
              </p>
              <p className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-1 text-primary">
                {text}
              </p>
              <span className="md:text-5xl sm:text-4xl text-xl font-bold text-primary">
                <Cursor cursorStyle="|" />
              </span>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500 ">
              Save time with precise real-time counting accuracy
            </p>
            {/* <button
              className=" w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 ease-in-out duration-300"
              style={{ backgroundColor: "#4CAF50" }}
            >
              <a
                href="https://gerberadetection.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Get Started
              </a>
            </button> */}
              <button
                className="w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 ease-in-out duration-300"
                style={{ backgroundColor: "#4CAF50" }}
                onClick={handleGetStarted}
              >
                Get Started
              </button>
          </div>
        </div>
        {/* Third SLide */}
        <div className="flex h-full items-center justify-center bg-green-100 dark:bg-gray-700 dark:text-white">
          <div className="max-w-[1000px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
              Reduce Manual Labor &
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                errors in
              </p>
              <p className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-1 text-primary">
                {text}
              </p>
              <span className="md:text-5xl sm:text-4xl text-xl font-bold text-primary">
                <Cursor cursorStyle="|" />
              </span>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500 ">
              Enhance production planning and insights for growers.
            </p>
            {/* <button
              className=" w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 ease-in-out duration-300"
              style={{ backgroundColor: "#4CAF50" }}
            >
              <a
                href="https://gerberadetection.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Get Started
              </a>
            </button> */}
              <button
                className="w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 ease-in-out duration-300"
                style={{ backgroundColor: "#4CAF50" }}
                onClick={handleGetStarted}
              >
                Get Started
              </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Hero;
