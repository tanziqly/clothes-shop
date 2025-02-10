import CategoryForm from "@/shared/ui/CategoryForm";
import ProductCard from "@/shared/ui/ProductCard/ui/ProductCard";
import React from "react";

const HomeArrivals = () => {
  return (
    <>
      <CategoryForm title="New Arrivals">
        {Array.from({ length: 4 }, (_, index) => (
          <ProductCard />
        ))}
      </CategoryForm>
      <div className="flex justify-center">
        <hr className="bg-neutral-500 w-full max-w-[1440px]" />
      </div>
    </>
  );
};

export default HomeArrivals;
