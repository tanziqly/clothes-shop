import { Outlet } from "react-router-dom";
import Footer from "@/widget/Footer/ui/Footer";
import Header from "@/widget/Header/ui/Header";

const Layout = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <header className="flex justify-center border-b border-neutral-300 dark:border-neutral-700">
        <Header />
      </header>
      <main>
        <Outlet /> {/* Рендерит дочерние элементы */}
      </main>
      <footer className="flex relative pt-32 flex-col gap-12 dark:bg-neutral-800 bg-[#F0F0F0] items-center px-5 mt-64">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
