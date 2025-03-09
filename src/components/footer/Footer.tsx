import React from "react";
import { images } from "../../images";
import { navItems } from "../../constants/navItems";

const Footer = () => {
  return (
    <div className="w-full bg-white mt-5 md:mt-0">
      <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-6 lg:px-20 max-md:text-center text-left ">
          {/* Logo Section */}
          <div className="flex max-md:justify-center items-start">
            <img
              src={images.MaxLogisticsLogo_footer}
              alt="logo footer"
              className="w-48 md:w-56 h-auto"
            />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-normal leading-8 mb-4">
              Митний пост «Городок». <br />
              ВМО №1, ВМО №2 <br />
              ("Скнилів, транспортний відділ")
            </h2>
            <div>
            <div className="flex flex-col lg:flex-row max-md:justify-center justify-between gap-8">
              {/* Phone Numbers */}
              <div className="space-y-2">
                <a href="tel:+380322448397" className="block hover:text-blue-600 transition-colors">
                  Тел. (032) 244-83-97
                </a>
                <a href="tel:+380671498199" className="block hover:text-blue-600 transition-colors">
                  Тел. 067-149-81-99
                </a>
                <a href="tel:+380671498141" className="block hover:text-blue-600 transition-colors">
                  Тел. 067-149-81-41
                </a>
                <a href="tel:+380687919990" className="block hover:text-blue-600 transition-colors">
                  Тел. 068-791-99-90
                </a>
              </div>

              {/* Email Addresses */}
              <div className="space-y-2">
                <a href="mailto:zahidresyrsmb@ukr.net" className="block hover:text-blue-600 transition-colors">
                  zahidresyrsmb@ukr.net
                </a>
                <a href="mailto:zravto@gmail.com" className="block hover:text-blue-600 transition-colors">
                  zravto@gmail.com
                </a>
              </div>
            </div>
            </div>
          </div>

          {/* Navigation and Social Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div className="space-y-2">
              {navItems.map((data, index) => (
                <a
                  key={index}
                  href={data.href}
                  className="block text-base opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors"
                >
                  {data.label}
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <a href="#" className="block opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="block opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors">
                Twitter
              </a>
              <a href="#" className="block opacity-60 hover:opacity-100 hover:text-blue-600 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#414141] py-8"></div>
    </div>
  );
};

export default Footer;
