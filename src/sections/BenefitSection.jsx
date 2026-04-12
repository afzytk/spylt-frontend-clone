import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "./VideoPinSection";
import { useMediaQuery } from "react-responsive";

const BenefitSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto md:pt-20 pt-10 px-5">
        <div className="col-center text-center">
          <p className="md:text-2xl text-lg font-paragraph text-balance">
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="md:mt-20 mt-10 col-center md:gap-0 gap-4">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p className="md:text-xl text-lg font-paragraph mt-4 md:mt-0">
              And much more ...
            </p>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="relative overlay-box">
          <VideoPinSection />
        </div>
      )}
    </section>
  );
};

export default BenefitSection;
