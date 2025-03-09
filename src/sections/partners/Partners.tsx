import React from "react";
import { motion } from "framer-motion";
import { Partnerslogos } from "../../images/partnersLogo/partners";

const Partners: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-medium text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Наші партнери
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {Partnerslogos.map((logo, index) => (
            <motion.div
              key={index}
              className={`w-full flex justify-center items-center p-4 relative ${
                index !== 0
                  ? "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-12 lg:before:border-l lg:before:border-gray-300"
                  : ""
              } ${index === Partnerslogos.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={logo.logo}
                alt={logo.alt}
                className="h-20 md:h-16 w-auto object-contain filter transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
