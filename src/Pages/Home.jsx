import React from 'react';
import { ArrowRight } from "lucide-react";
import Button from '../Components/Button';

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          muted
          loop
          autoPlay
          src="https://videos.pexels.com/video-files/856627/856627-hd_1920_1080_24fps.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        ></video>

        <div className='relative z-10 flex flex-col justify-center items-center h-full px-4'>
          <div className='text-center flex flex-col justify-center items-center mb-10'>
            <h1 className='font-bold text-[2rem] md:text-[4rem] leading-[3rem] md:leading-[5rem] text-white'>
              Powering Industry with
            </h1>
            <h1 className='font-bold text-[2rem] md:text-[4rem] leading-[3rem] md:leading-[5rem] text-white'>
              Premium Lubricants
            </h1>
            <div className='w-full md:w-[50%] text-[0.9rem] md:text-[1rem] text-white leading-[1.5rem] mt-4'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </div>
          </div>

          <div className="mt-6">
            <Button icon={ArrowRight} text="Learn more" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
