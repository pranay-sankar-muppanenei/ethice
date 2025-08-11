import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import SubscribeSection from "@/components/SubscribeSection";
import WhatWeDo from "@/components/WhatWeDo";
import AboutUs from "@/components/AboutUs";
import FocusCards from "@/components/FocusCards";
import InsightsPage from "@/components/InsightCard";
import HeroDupe from "@/components/HeroDupe";
import ConsultationForm from "@/components/ConsultationForm";
import SolutionsTabs from "@/components/SolutionsTabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeDo/>
      <HeroDupe/>
      <AboutUs/>
      <FocusCards/>
      <SolutionsTabs/>
      <InsightsPage/>
     <ConsultationForm/>
      <SubscribeSection />
      <Footer />
    </>
  );
}
