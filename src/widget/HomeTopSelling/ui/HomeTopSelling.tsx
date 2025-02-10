import CategoryForm from "@/shared/ui/CategoryForm";
import ProductCard from "@/shared/ui/ProductCard/ui/ProductCard";
import React from "react";

const HomeTopSelling = () => {
  return (
    <CategoryForm title="Top Selling">
      {Array.from({ length: 4 }, (_, index) => (
        <ProductCard />
      ))}
    </CategoryForm>
  );
};

export default HomeTopSelling;
