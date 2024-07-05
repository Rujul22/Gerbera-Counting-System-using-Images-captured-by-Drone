import React , { useState }from 'react';
import { Carousel } from 'flowbite-react';
import './LandingPage.css';  
//import banner from './farmer.jpeg';
const LandingPage = () => {  
 
  return (
  
    <div className='bg-neutralSilver'>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
      <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row md:flex-row-reverse items-center justify-between gap-12">
          {/* <div>
            <img src={banner} alt=""/>
          </div> */}
          <div className="md:w-1/2">
            {/* Text here */}
            <h1 className="text-7xl font-semibold mb-4 text-neutralDGrey leading-snug">Automate Flower Counting<br/> <span className='text-brandPrimary leading-snug'>using Drones</span></h1>
            <p className='text-black text-base mb-8'>Save time with precise real-time counting accuracy</p>
            <button className='btn-primary'>Get a Demo</button>
          </div>  
        </div>
        <div className="flex h-full items-center justify-center">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center">
          Slide 3
        </div>
      </Carousel>
    </div>
  </div>
  
    // <div className='bg-neutralSilver'>
    //   <div className='px-4 lg:px-14 max-w-scrren-2xl mx-auto min-h-screen h-screen'>
    //   <Carousel className='w-full mx-auto' >
    //     <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
    //       <div>
    //         <img src={banner} alt=""/>
    //       </div>  
    //         {/* Text here */}
    //         <div className="md:w-1/2">
    //           <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Automate Flower Counting
    //           <span className='text-brandPrimary leading-snug'>using Drones</span></h1>
    //           <p className='text-black text-base mb-8'>Save time with precise real-time counting accuracy</p>
    //           <button className='btn-primary'>Get a Demo</button>
    //         </div>
    //     </div>
    //     <div className="flex h-full items-center justify-center ">
    //       Slide 2
    //     </div>
    //     <div className="flex h-full items-center justify-center ">
    //       Slide 3
    //     </div>
    //   </Carousel>
    //   </div>
    // </div>
  )
}
export default LandingPage;