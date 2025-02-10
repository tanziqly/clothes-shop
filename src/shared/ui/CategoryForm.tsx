import React, { FC } from "react";
import { Button } from "./shadcn/button";
import { Link } from "react-router-dom";

interface CategoryFormProps {
  title: string;
  children: React.ReactNode;
}

const CategoryForm: FC<CategoryFormProps> = ({ title, children }) => {
  return (
    <section className="flex justify-center py-20">
      <div className="flex items-center flex-col max-w-[1440px] w-full">
        <h2 className="text-center text-5xl font-bold">{title}</h2>
        <div className="flex w-full gap-20 mt-14 mb-9 justify-between">
          {children}
        </div>
        <Button variant="outline" className="w-fit" size="lg" asChild>
          <Link to="/">View all</Link>
        </Button>
      </div>
    </section>
  );
};

export default CategoryForm;
