import CategoryForm from "@/shared/ui/CategoryForm";
import ProductCard from "@/shared/ui/ProductCard/ui/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/shadcn/carousel";

const HomeArrivals = () => {
  return (
    <>
      {/* Десктопная версия */}
      <div className="md:flex hidden justify-center">
        <CategoryForm title="New Arrivals">
          {Array.from({ length: 4 }, (_, index) => (
            <ProductCard key={index} />
          ))}
        </CategoryForm>
      </div>

      {/* Мобильная версия */}
      <div className="md:hidden flex justify-center">
        <CategoryForm title="New Arrivals">
          <Carousel className="w-full max-w-[322px]">
            <CarouselContent>
              {Array.from({ length: 4 }, (_, index) => (
                <CarouselItem key={index} className="ml-[7px] basis-full">
                  <ProductCard />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-10" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CategoryForm>
      </div>

      {/* Разделительная линия */}
      <div className="flex justify-center">
        <hr className="bg-neutral-500 w-full max-w-[1440px]" />
      </div>
    </>
  );
};

export default HomeArrivals;
