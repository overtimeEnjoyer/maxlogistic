import React from "react";

import { servicesImages } from "../../images/services";




const ServicesSection = () => {
  return (
    <div className='flex align-center justify-center pt-[80px] flex-col px-[20px] relative' id="servises">

      <img
        src={servicesImages.servicesBackground1}
        className='w-[40vw] absolute top-0 left-0 z-[-1]'
      />
      <img
        src={servicesImages.servicesBackground2}
        className='w-[33vw] absolute top-0 right-0 grayscale z-[-1]'
      />

      <div className='text-center mb-[50px]'>
        <h2 className='text-black font-medium text-[40px] leading-[45.96px] mb-[15px]'>Наші послуги</h2>
        <div className='text-[#777777] font-normal text-base leading-[30px] max-w-[485px] ml-auto mr-auto'>MaxLogistics пропонує широкий спектр послуг у сфері логістики та дасть змогу розвивати бізнес в комфортних умовах</div>
      </div>

      <div className='max-w-[1201px] ml-auto mr-auto flex items-center justify-center gap-[85px] max-lg:gap-[25px] max-lg:flex-col max-lg:max-w-[600px]'>
        <img
          className='w-[100%]'
          src={servicesImages.servicesImg1}
          alt='Service'
        />
        <div>
          <h3 className='text-black font-medium text-[38px] leading-[45px] mb-[25px]'>Оренда складських приміщень класів А, А+, В, В+</h3>
          <p className='text-[#AAAAAA] font-normal text-[20px] leading-[30px]'>ЛК «МАКС ЛОГІСТИК» має у власності понад 80 000 м2 нових та сучасних складських приміщень класу
            А, А+, В, В+, що відповідають усім міжнародним стандартам з екологічності, тепло та енергоефективності.
            Для наших клієнтів, ми пропонуємо здачу в оренду вільних площ з урахуванням ваших вимог, а також пропонуємо
            будівництво складських та виробничих приміщень під потреби замовника.</p>
        </div>
      </div>

      <img
        src={servicesImages.servicesBackground3}
        className='w-[42vw] absolute top-[19%] translateX-[-40%] left-0 z-[-1]'
      />

      <img
        src={servicesImages.servicesBackground4}
        className='w-[20vw] absolute top-[21%] translateX-[-40%] right-0 z-[-1]'
      />

      <div className='max-w-[1201px] mt-[70px] flex-row-reverse ml-auto mr-auto flex items-center justify-center gap-[85px] max-lg:gap-[25px] max-lg:flex-col max-lg:max-w-[600px]'>
        <img
          className='w-[100%]'
          src={servicesImages.servicesImg2}
          alt='Service'
        />
        <div>
          <h3 className='text-black font-medium text-[38px] leading-[45px] mb-[25px]'>Оренда холодильних і морозильних складських приміщень</h3>
          <p className='text-[#AAAAAA] font-normal text-[20px] leading-[30px]'>
            Наша компанія пропонує оренду холодильних складських приміщень з температурним режимом від 0 до +12С, а також морозильні склади з
            температурою від 0 до - 30С. Усі наявні склади забезпечені безперебійним енергопостачанням.
            На території ЛК «МАКС ЛОГІСТИК» знаходиться цілодобова охорона та камери відеоспостереження, якими
            оснащений весь комплекс та усі складські приміщення для того, щоб ваші товари та вантажі перебували
            під надійним захистом і безпекою.
          </p>
        </div>
      </div>

      <img
        src={servicesImages.servicesBackground5}
        className='w-[31vw] absolute top-[40%] left-[14%] z-[-1]'
      />

      <img
        src={servicesImages.servicesBackground6}
        className='w-[16vw] absolute top-[41.5%] left-[11%] z-[-1] opacity-2'
      />

      <div className='max-w-[1201px] ml-auto mr-auto mt-[120px]'>
        <img
          className='w-[100%] max-w-[682px] ml-[-90px] max-lg:ml-0'
          src={servicesImages.servicesImg3}
          alt='Service'
        />
        <div className='max-w-[665px] mt-[34px] ml-[40px] max-lg:ml-0'>
          <h3 className='text-black font-medium text-[40px] leading-[55px]'>Будівництво об’єктів під замовника</h3>
          <p className='text-[#AAAAAA] font-normal text-[20px] leading-[30px]'>
            З територією логістичного комплексу межує компанія ПП «Престиж Експрес», яка пропонує високоякісні послуги з
            міжнародних та внутрішніх перевезень, що забезпечують швидку, безпечну та ефективну доставку вашого вантажу.
            Компанія спеціалізується на реалізації комплексних логістичних рішень, що включають всі етапи перевезення — від
            планування маршруту до доставки вантажу кінцевому отримувачу.
          </p>
        </div>
      </div>

      <img
        src={servicesImages.servicesBackground7}
        className='w-[26.2vw] absolute top-[43%] right-[0] z-[-1] grayscale max-w-[380px]'
      />

      <img
        src={servicesImages.servicesBackground8}
        className='w-[26vw] absolute bottom-[27%] left-[0] z-[-1]'
      />

      <img
        src={servicesImages.servicesBackground9}
        className='w-[40vw] absolute bottom-[24%] right-[12%] z-[-1] grayscale max-w-[576px]'
      />

      <div className='max-w-[1201px] ml-auto mr-auto mt-[135px] mb-[57px] flex items-center justify-center gap-[85px] max-lg:gap-[25px] max-lg:flex-col max-lg:max-w-[600px]'>
        <img
          className='w-[100%]'
          src={servicesImages.servicesImg4}
          alt='Service'
        />
        <div>
          <h3 className='text-black font-medium text-[38px] leading-[45px] mb-[25px]'>Сервіс технічного обслуговування</h3>
          <p className='text-[#AAAAAA] font-normal text-[20px] leading-[30px]'>На території нашого логістичного комплексу MAX LOGISTICS
            ви маєте можливість скористатися професійними послугами з обслуговування та ремонту транспортних засобів. Команда кваліфікованих
            фахівців забезпечує високий рівень сервісу, використовуючи найсучасніші інструменти та обладнання.</p>
        </div>
      </div>
      <div className='ml-auto mr-auto grayscale'>
        <img src={servicesImages.servicesBackgroundBottom} alt='background' className='mb-[50px]' />
      </div>
    </div>
  );
};

export default ServicesSection;

