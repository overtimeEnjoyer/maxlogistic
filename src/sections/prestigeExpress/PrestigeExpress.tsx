import React from "react";
import { images } from "../../images";

const PrestigeExpress = () => {
  return (
    <div className="PrestigeExpressBackGround">
      <div className="w-full flex flex-col justify-center items-center bg-white">
        <img
          src={images.prestigeExpressLogo}
          alt="Захід ресурс"
          className="h-[110px] w-[550px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-11/12 md:w-8/12 mt-16 md:mt-28 bg-[#D9D9D9] bg-opacity-40 px-2 py-2 md:mb-[80px] mb-20">
        <p
          className="text-lg max-md:px-3 md:leading-[40px] md:text-2xl font-medium text-[#333333] text-center"

        >
          Територія « MAX LOGISTICS» межує з ПП «Престиж Експрес»,  яка пропонує
          високоякісні послуги з міжнародних та внутрішніх перевезень, що
          забезпечують швидку, безпечну та ефективну доставку вашого вантажу.
          Компанія спеціалізується на реалізації комплексних логістичних рішень,
          що включають всі етапи перевезення — від планування маршруту до
          доставки вантажу кінцевому отримувачу.
        </p>
      </div>
      <div className="bg-white flex flex-col w-10/12 pt-5 px-7 md:pt-10 md:px-14 items-center justify-center md:prestigeExpressBackGroundLogo rounded-3xl">
        <h3 className="text-[#132433] text-xl md:text-[40px] font-bold mb-5 md:mb-10">
          ВАНТАЖНІ ПЕРЕВЕЗЕННЯ
        </h3>
        <p className="md:text-center text-left text-base md:leading-10 text-[#000000] md:text-2xl font-medium">
          Дані послуги включають:
          <br />• Організацію міжнародних перевезень, що охоплюють вантажні види
          транспорту, з можливістю обробки документів та митного оформлення.
          <br />• Організацію внутрішніх перевезень по території України, що
          включають як стандартні, так і термінові вантажні перевезення.
          <br />• Оптимізацію логістичних процесів для забезпечення своєчасної
          та безперебійної доставки вашого вантажу, включаючи планування
          маршрутів та вибір найбільш ефективних транспортних засобів. <br />•
          Професійний супровід на всіх етапах перевезення, від приймання вантажу
          до його доставки, з урахуванням всіх ваших вимог та особливостей.
          <br />• Гнучкість у виборі рішень, що дозволяє адаптувати послуги під
          специфічні потреби вашого бізнесу.
        </p>
        <img src={images.line} alt="line" className="mt-8" />
      </div>
    </div>
  );
};

export default PrestigeExpress;
