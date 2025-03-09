import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header, Banner, Footer } from "../components";
import {
  AdvantagesSection,
  IntroductionSection,
  AboutUsSection,
  ContactUsSection,
  ServicesSection,
  LocationSection,
} from "../sections";
import { Partners } from "../sections/partners";

import AboutUsZahidResurs from "../sections/AboutUsZahidResurs/AboutUsZahidResurs";
import CustomsBrokerageServices from "../sections/CustomsBrokerageServices/CustomsBrokerageServices";
import PrestigeExpress from "../sections/prestigeExpress/PrestigeExpress";
import AboutUsPrestigeExpress from "../sections/AboutUsPrestigeExpress/AboutUsPrestigeExpress";
import RentOfSpecialEquipment from "../sections/rentOfSpecialEquipment/RentOfSpecialEquipment";
import ServicesPromo from "../sections/services-promo/ServicesPromo";
import WhatAreOurAdvantages from "../sections/whatAreOurAdvantages/WhatAreOurAdvantages";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <IntroductionSection />
      <AdvantagesSection />
      <Banner />
      <AboutUsSection />
      <LocationSection />
      <ServicesSection />
     <AboutUsZahidResurs />
      <CustomsBrokerageServices />
      <PrestigeExpress />
      <AboutUsPrestigeExpress />
      <RentOfSpecialEquipment />
       <ServicesPromo />
      <WhatAreOurAdvantages />
     <ContactUsSection />
        <Partners />
     <Footer /> 
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
