import BrandBar from "@/features/BrandBar/ui/BrandBar";
import BannerImg from "./assets/BannerImg1.png";
import { Button } from "@/shared/ui/shadcn/button";

const Banner = () => {
  return (
    <section className="flex flex-col text-base dark:bg-background bg-[#F2F0F1] items-center">
      <div
        className="px-5 w-full items-center flex max-w-[1440px] h-[663px] md:bg-cover md:bg-center"
        style={{
          backgroundImage:
            window.innerWidth >= 768 ? `url(${BannerImg})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-[64px] w-full max-w-[315px] md:max-w-[577px] font-black md:leading-[56px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <span className="w-full text-sm md:text-base text-neutral-500 my-5 max-w-[577px] p-2 bg-opacity-50 bg-white dark:bg-neutral-900 rounded-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </span>
          <Button
            size="lg"
            className="w-full max-w-[200px] mb-5 dark:bg-white md:mb-12 bg-black py-6 rounded-full"
          >
            Shop Now
          </Button>
          <div className="md:flex grid justify-center grid-cols-2 grid-rows-2 md:grid-rows-1 p-4 bg-opacity-50 bg-white dark:bg-neutral-900 rounded-lg">
            {/* Первый контейнер */}
            <div className="gap-2 mr-8 w-full pr-8 border-r border-neutral-300 flex flex-col items-center">
              <h2 className="font-bold text-2xl sm:text-[40px]">200+</h2>
              <span className="text-black dark:text-neutral-500 sm:text-base text-xs sm:text-neutral-500">
                International Brands
              </span>
            </div>

            {/* Второй контейнер */}
            <div className="gap-2 w-full md:mr-8 md:pr-8 md:border-r border-neutral-300 flex flex-col items-center">
              <h2 className="font-bold text-2xl sm:text-[40px]">2,000+</h2>
              <span className="text-black dark:text-neutral-500 sm:text-base text-xs sm:text-neutral-500">
                High-Quality Products
              </span>
            </div>

            {/* Третий контейнер */}
            <div className="gap-2 col-span-2 md:col-span-1 flex flex-1 flex-col items-center mt-4 md:mt-0">
              <h2 className="font-bold text-2xl sm:text-[40px]">30,000+</h2>
              <span className="text-black dark:text-neutral-500 sm:text-base text-xs sm:text-neutral-500">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </div>
      <BrandBar />
    </section>
  );
};

export default Banner;
