import React from "react";
import { images } from "../../images";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const AboutUsSection = () => {
  return (
    <div>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div ref={ref} className="MaxLogisticBackGroundAboutUs">
            <div className="p-8">
              <div className="flex flex-col text-center justify-center">
                <motion.p
                  className="max-w-[1200px] m-auto text-2xl font-normal mt-[30px]"
                  initial={{ opacity: 0, y: 20 }} // Початкове значення: непрозорий, злегка переміщений
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.5, ease: "easeOut" }} // Плавне відновлення
                >
                  Логістична компанія “MAX LOGISTICS LTD” розпочала свій шлях ще з
                  2004 року, будучи невеличким підприємством, яке налічувало всього
                  50 працівників. Сьогодні наша компанія є однією з найбільших на
                  ринку логістики в західній частині України, що може запропонувати
                  широкий спектр послуг та індивідуальний підхід до кожного клієнта.
                  <br /> У розпорядженні “MAX LOGISTICS LTD”, який знаходиться в
                  місті Городок є власний логістичний парк, понад 80 000 м2
                  складських сухих, морозильних, холодильних, а також виробничих
                  приміщень класу В,В+, А, А+ , митний пост «Городок», що здійснює
                  усі необхідні операції та процедури з розмитнення товарів, власні
                  митні склади та брокерські фірми, а також дочірня компанія
                  «Престиж Експрес», яка займається вантажними перевезеннями по всій
                  Україні, Європі та країнами близького Сходу. У наявності є великий
                  автопарк, що складається з вантажних автомобілів, спецтехніки,
                  будівельної техніки та агротехніки, а також сервіс для їх
                  обслуговування.
                  <br /> Маючи понад 19 років досвіду, нам довіряють провідні
                  компанії України та світу, що мотивує нас до нових досягнень ще
                  дужче!
                  <br /> Ми не припиняємо розвиватися та удосконалювати свою роботу,
                  тому я охоче запрошую до співпраці українські підприємства, а
                  також іноземні філії. Ми готові працювати з клієнтами із
                  залученням як власного так і спільного капіталу. Окрім цього, ми
                  пропонуємо продаж земельних ділянок та складських площ.
                  Логістичний парк «MAX LOGISTICS LTD» знаходиться у вигідний та
                  зручній геолокації всього 15 км від Львова, пролягає вздовж
                  міжнародної траси Е40 неподалік митних пунктів «Краковець»,
                  «Мостиська» і транспортного коридору «Київ-Чоп».
                </motion.p>
                <motion.p
                  className="text-2xl font-normal mt-6 items-center flex flex-row max-call-screen:flex-col justify-center"
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} 
                >
                  Щоб дізнатися більше звертайтеся до нас за телефоном
                  <span className="mx-3 flex flex-row justify-center mt-2">
                    <img src={images.PhoneIconAboutUs} alt="phone" />
                    + 380 68 809 88 00{" "}
                  </span>
                </motion.p>
              </div>
            </div>
          </div>
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.img
            ref={ref}
            src={images.bannerAboutUs}
            alt="banner About Us"
            className="w-full mb-8"
            initial={{ opacity: 0, y: -50 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
          />
        )}
      </InView>

      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.img
            ref={ref}
            src={images.bannerAboutUsBus}
            alt="Bus MAX logistic"
            className="w-full"
            initial={{ opacity: 0, x: 50 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        )}
      </InView>
    </div>
  );
};

export default AboutUsSection;
