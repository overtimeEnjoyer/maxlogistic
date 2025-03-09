import React from "react";
import { motion } from "framer-motion";
import { features } from "../../constants/features";

const FeaturesSection: React.FC = () => {
  return (
    <div className="imageBackgroundFeatures flex justify-center items-center py-16">
      <div className="p-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center md:w-[80%] lg:w-[90%] min-h-[250px] w-full mx-auto"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              viewport={{ once: true }} 
            >
              <div className="relative mx-auto rounded-full w-[120px] h-[120px] flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-[#84848433] rounded-full opacity-70"></div>
                <div className="relative z-10 w-[60px] h-[60px]">
                  <img
                    src={feature.iconPath}
                    alt={feature.title}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h3 className="font-bold text-xl">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
