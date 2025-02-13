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
      <div className="flex items-center px-5 flex-col max-w-[1440px] w-full">
        {/* Заголовок */}
        <h2 className="text-center h2">{title}</h2>

        {/* Контейнер для дочерних элементов */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 mb-9 w-full">
          {children}
        </div>

        {/* Кнопка "View all" */}
        <Button variant="outline" className="w-fit" size="lg" asChild>
          <Link to="/">View all</Link>
        </Button>
      </div>
    </section>
  );
};

export default CategoryForm;
