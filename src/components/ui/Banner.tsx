import React from 'react'

import { images } from '../../images';

const Banner = () => {
  return (
    <div className="hidden md:block relative h-40 overflow-hidden">
      <img
        src={images.banner}
        alt="banner"
        className="w-full h-full object-cover object-center"
      />
    </div>
  )
}

export default Banner;
