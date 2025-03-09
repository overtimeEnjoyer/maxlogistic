import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import imageMaxLogisticBigBanner from "../../images/maxlogistics_logo_red.png";

const Banner = () => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div ref={ref} className="flex justify-center bg-[#EB3531] mt-5">
          <motion.img
            src={imageMaxLogisticBigBanner}
            alt="MaxLogistic Big Banner"
            className="mb-[-2px] object-contain"
            initial={{ opacity: 0, x: -200 }}  // Start off-screen to the left
            animate={inView ? { opacity: 1, x: 0 } : {}}  // Slide in and fade in when in view
            transition={{ duration: 0.8 }}
          />
        </div>
      )}
    </InView>
  );
};

export default Banner;
