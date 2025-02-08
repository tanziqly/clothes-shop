import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/shadcn/carousel";

// brands bar
import brand1 from "./assets/versace1.png";
import brand2 from "./assets/zara2.png";
import brand3 from "./assets/gucci3.png";
import brand4 from "./assets/prada4.png";
import brand5 from "./assets/ck5.png";

const BrandBar = () => {
  return (
    <>
      <div className="bg-black hidden lg:flex justify-center w-full">
        <div className="bg-black px-5 w-full max-w-[1440px] flex justify-between py-11">
          <img src={brand1} />
          <img src={brand2} />
          <img src={brand3} />
          <img src={brand4} />
          <img src={brand5} />
        </div>
      </div>
      <div className="lg:hidden bg-black py-5 w-full block">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="flex justify-center ">
              <img src={brand1} alt="" />
            </CarouselItem>
            <CarouselItem className="flex justify-center ">
              <img src={brand2} alt="" />
            </CarouselItem>
            <CarouselItem className="flex justify-center ">
              <img src={brand3} alt="" />
            </CarouselItem>
            <CarouselItem className="flex justify-center ">
              <img src={brand4} alt="" />
            </CarouselItem>
            <CarouselItem className="flex justify-center ">
              <img src={brand5} alt="" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default BrandBar;
