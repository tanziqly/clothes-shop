import DressStyleButton from "@/shared/DressStyleButton/ui/DressStyleButton";
// images
import Casual from "./assets/Casual.png";
import Formal from "./assets/Formal.png";
import Gym from "./assets/Gym.png";
import Party from "./assets/Party.png";

const HomeDressStyle = () => {
  return (
    <section className="flex justify-center px-5">
      <div className="max-w-[1440px] w-full bg-neutral-200 md:p-16 p-6 rounded-3xl flex flex-col items-center">
        <h2 className="font-bold text-3xl md:text-5xl mb-16">
          Browse By Dress Style
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex md:flex-row flex-col gap-5">
            <DressStyleButton
              className="w-full md:h-[289px] h-[190px] object-cover md:w-[407px]"
              buttonText="Casual"
              image={Casual}
            />
            <DressStyleButton
              className="w-full md:h-[289px] h-[190px] object-cover md:w-[684px]"
              buttonText="Formal"
              image={Formal}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <DressStyleButton
              className="w-full md:h-[289px] h-[190px] object-cover md:w-[684px]"
              buttonText="Party"
              image={Party}
            />
            <DressStyleButton
              className="w-full md:h-[289px] h-[190px] object-cover md:w-[407px]"
              buttonText="Gym"
              image={Gym}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDressStyle;
