
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-sinofi-darkPurple to-sinofi-purple text-white overflow-hidden flex">
      <div className="flex-6 grid place-items-center">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl text-center">
                  <span className="block">Premium Tech</span>
                  <span className="block text-sinofi-lightPurple">Exceptional Experience</span>
                </h1>
                <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center">
                  Discover the latest high-end electronics from top brands. From smartphones to smart TVs, we bring you the best in technology.
                </p>
                <div className="mt-5 sm:mt-8 flex justify-center items-center">
                  <div className="rounded-md shadow bg-red-400">
                    <Link to="/products">
                      <Button className="w-full flex items-center justify-center px-8 py-6 text-base font-medium rounded-md text-white bg-sinofi-purple hover:bg-sinofi-purple/90 md:py-4 md:text-lg md:px-10">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
                </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex-6">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://img.freepik.com/premium-photo/realistic-8k-image-highquality-electronic-gadgets_960080-14018.jpg"
          alt="Electronics showcase"
        />
      </div>
    </div>
  );
};

export default Hero;
