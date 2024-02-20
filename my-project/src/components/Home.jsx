import React from "react";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ServiceSection from "./ServiceSection";
import Slidersection from "./Slidersection";
import TabSection2 from "./TabSection2";
import PricingSection from "./PricingSection";

import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

function Home() {
     return (
          <div>
               <Navbar />
               <HeroSection />
               <StatsSection />
               <ServiceSection />
               <Slidersection />
               <TabSection2 />
               <PricingSection />
               <FooterSection/>
          </div>
     );
}

export default Home;
