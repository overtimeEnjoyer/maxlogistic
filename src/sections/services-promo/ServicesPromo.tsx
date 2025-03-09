import React from 'react';
import { images } from '../../images';

const ServicesPromo = () => {
  return (
    <>
      <img src={images.maxlogistic_swiper} className='w-full' alt='Logo Max Logistic Swiper' />
      <div className='w-full bg-[#EB3531]'>
        <div className='flex flex-col lg:flex-row px-4 lg:px-16'>
            <div className='max-lg:hidden'>
          <img
            src={images.maxlogisticsLogoRedVertical}
            className='w-[105px] h-[540px] lg:-my-1 lg:mr-16 mx-auto lg:mx-0'
            alt='Max Logistics Logo Red Vertical'
          />
          </div>
          <div className='flex flex-col lg:flex-row justify-between w-full items-center mt-4 lg:mt-0'>
            <div className='h-auto lg:h-[68%] flex flex-col text-center lg:text-left'>
              <span className='text-[#FFFFFF] font-medium text-base mb-2 md:mb-5'>Наші послуги</span>
              <h2 className='text-[#FFFFFF] font-medium text-2xl lg:leading-[50px] lg:text-[40px] mb-2 md:mb-5'>
                Ми задовільнимо всі
                ваші потреби
              </h2>
              <p className='text-sm text-white font-normal lg:leading-8'>
                Ми пропонуємо широкий спектр послуг у сфері логістики 
                та даємо змогу розвивати бізнес в комфортних умовах.
              </p>
            </div>
            <img
              src={images.bus}
              alt='bus'
              className='max-w-full lg:max-w-[639px] my-8 lg:my-auto'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPromo;