import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import Footer from "./sections/Footer";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  useGSAP(
    () => {
      if (!isDesktop) return;

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    },
    { dependencies: [isDesktop] },
  );
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
