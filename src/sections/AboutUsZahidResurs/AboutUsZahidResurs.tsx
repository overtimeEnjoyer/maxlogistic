import React from "react";
import { images } from "../../images";

const AboutUsZahidResurs = () => {
  return (
    <div className="zahidResursBackGroundAboutUs">
      <div className="w-full flex flex-col justify-center items-center bg-white">
        <img
          src={images.zahidResursLogoBanerAboutUs}
          alt="Захід ресурс"
          className="h-[110px] w-[320px] my-5"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-11/12 md:w-9/12 mt-16 md:mt-28 bg-[#D9D9D9] backdrop-blur-sm bg-opacity-60 px-4 py-8 md:py-12 mb-20 md:mb-[150px]">
        <h2 className="text-white text-lg md:text-[40px] md:leading-[50px] font-bold text-center mb-6 md:mb-10">
          ПРОЦЕДУРИ МИТНОГО ОФОРМЛЕННЯ ВАНТАЖІВ
        </h2>
        <p className="text-base md:text-2xl font-medium text-white text-center p-3 md:p-0" style={{ fontSize: 'clamp(16px, 2.5vw, 24px)' }}>
          Територія «MAX LOGISTICS» межує з ТзОВ «Захід Ресурс» та співпрацює у сфері митно-брокерської діяльності. Головним пріоритетом компанії є оперативне сприяння суб’єктам ЗЕД у здійсненні митного оформлення вантажу протягом чотирьох годин.
          <br /><br />
          На території компанії розташовані структурні підрозділи Державної митної служби України Львівської митниці:
          <br />
          • Відділ митного оформлення №1 митного поста «Городок» — здійснює митне оформлення товарів і транспортних засобів у всіх видах митних режимів.
          <br />
          • Відділ митного оформлення №2 митного поста «Городок» — оформлює придбані транспортні засоби фізичними та юридичними особами.
          <br />
          • Відділ митного оформлення «Львів» митного поста «Західний» — виконує митне оформлення товарів з енергетичною складовою (паливо, газ тощо).
        </p>
      </div>
      <div className="flex items-center justify-center bg-white w-11/12 rounded-t-3xl px-4 py-6">
        <h2 className="text-sm leading-8 md:text-[40px] md:leading-[40px] font-bold text-center w-10/12" style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}>
          Надання професійних посередницьких послуг з декларування товарів та транспортних засобів
        </h2>
      </div>
    </div>
  );
};

export default AboutUsZahidResurs;
