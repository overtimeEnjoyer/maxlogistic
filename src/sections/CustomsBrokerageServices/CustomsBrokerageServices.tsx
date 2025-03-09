import React from "react";
import { images } from "../../images";

const CustomsBrokerageServices = () => {
  return (
    <div className="CustomsBrokerageServices">
      <div className="relative flex items-center justify-center w-11/12 p-4 md:p-10">
        <div className="absolute inset-0 bg-[#636D7C] opacity-50"></div>
        <p className="relative font-normal text-base md:text-2xl w-full md:w-11/12 leading-6 md:leading-9">
          <span className="text-[#EB3531]">•</span> Консультації щодо складання
          експортно-імпортних контрактів та ведення зовнішньоекономічної
          діяльності <br />
          <span className="text-[#EB3531]">•</span> Акредитація суб’єктів
          зовнішньоекономічної діяльності на Львівській митниці
          <br /> <span className="text-[#EB3531]">•</span> Організація та
          супровід митного оформлення вантажів, класифікація товарів та
          попереднє визначення їх митної вартості
          <br /> <span className="text-[#EB3531]">•</span> Допомога у оформленні
          необхідного для митного оформлення комплекту документів: контрактів,
          специфікацій, інвойсів, різноманітних сертифікатів тощо
          <br /> <span className="text-[#EB3531]">•</span> Попередній розрахунок
          передбачених чинним законодавством митних платежів при ввезенні
          товарів, транспортних засобів
          <br /> <span className="text-[#EB3531]">•</span> Інформування про
          митну специфіку товарів та транспортних засобів, що будуть завозитися
          <br /> <span className="text-[#EB3531]">•</span> Підготовка всіх типів
          вантажних декларацій (ЕХ, ІМ, ТР та інших)
          <br /> <span className="text-[#EB3531]">•</span> Активна участь у
          оскарженні незаконних постанов митниці та вирішення спорів
          <br /> <span className="text-[#EB3531]">•</span> Проведення фізичного
          (ідентифікаційного) огляду з метоюВ перевірки їх відповідності опису
          (відомостям), зазначеному у товаросупровідних документах.
        </p>
      </div>

      <div className="CustomsBrokerageServicesIconBACKGround p-4 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-end mb-6 md:mb-10">
          <img
            src={images.CustomsBrokerageServicesIcon}
            alt="Customs Brokerage Services Icon"
            className="mb-4 md:mb-0 md:mr-5 w-16 md:w-auto"
          />
          <h2 className="text-[#132433] text-2xl md:text-[40px] font-bold text-center md:text-left">
            МИТНО- БРОКЕРСЬКІ ПОСЛУГИ
          </h2>
        </div>
        <div>
          <p className="font-normal text-[#FAFAFA] text-base md:text-2xl text-center">
            Консультаційне обслуговування з питань застосування митного
            законодавства; електронне декларування; консультування та супровід
            складання експортно-імпортних контрактів та ведення
            зовнішньоекономічної діяльності; акредитація суб'єктів
            зовнішньоекономічної діяльності на Львівській митниці; організація
            та супровід митного оформлення вантажів, класифікація товарів та
            попереднє визначення їх митної вартості; підготовка всіх типів
            вантажних митних декларацій; оформлення необхідних для митного
            оформлення документів (Carnet-TIR, CMR, і т.п.). зважування
            транспортного засобу з вантажем, вибіркове переважування вантажних
            місць на вагах; надання рамп для проходження митних процедур,
            пов’язаних з імпортом, експортом та транзитним переміщенням
            вантажів;
          </p>
        </div>
      </div>

      <div className="w-full md:w-[89%] flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between mb-16 md:mb-36 p-4 md:p-0">
        <img
          src={images.CustomsBrokeragePhoto}
          alt="CustomsBrokeragePhoto"
          className="w-full md:w-4/12"
        />
        <img
          src={images.zahidResursLogoBanerAboutUs}
          alt="zahidResursLogoBanerAboutUs"
          className="w-full md:w-3/12"
        />
        <img
          src={images.CustomsBrokeragePhotoSecond}
          alt="CustomsBrokeragePhotoSecond"
          className="w-full md:w-4/12"
        />
      </div>
    </div>
  );
};

export default CustomsBrokerageServices;