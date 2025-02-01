import Header from "@/widget/Header/ui/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className="flex justify-center border-b border-neutral-300 dark:border-neutral-700">
        <Header />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
