import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

const FlavorSection = () => {
  return (
    <section className="flavor-section w-full overflow-hidden lg:overflow-visible">
      <div className="h-full w-full flex lg:flex-row flex-col items-center relative">
        <div className="w-full lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full w-full lg:w-auto">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
