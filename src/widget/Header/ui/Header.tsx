import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/shadcn/button";
import { Menu } from "lucide-react";
import InputSearch from "@/features/InputSearch/ui/InputSearch";
import { ModeToggle } from "@/shared/ui/mode-toggle";
import MobileMenu from "./MobileMenu";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between w-full max-w-[1440px] px-4 py-4 mx-auto">
      <div className="flex items-center">
        <Link to="/">
          <h3 className="font-bold text-2xl pr-4 mr-4 sm:border-r border-neutral-300 dark:border-neutral-700">
            TellNur<span className="text-primary">.shop</span>
          </h3>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-4 text-lg max-[1046px]:text-base text-neutral-500">
            <li>
              <Link className="hover:text-black" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-black" to="/">
                All products
              </Link>
            </li>
            <li>
              <Link className="hover:text-black" to="/">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link className="hover:text-black" to="/">
                Brands
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <InputSearch className="sm:flex hidden" />
      <div className="flex gap-2">
        <ModeToggle />
        <Button asChild variant="outline" size="icon">
          <Link to="/cart">
            <ShoppingCart size={18} />
          </Link>
        </Button>
        <div className="lg:hidden flex items-center ml-2 space-x-2">
          <Button variant="outline" size="icon" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="items-center lg:flex hidden ml-4 space-x-2">
        <Button variant="outline" asChild>
          <Link className="text-base" to="/sign-in">
            Sign in
          </Link>
        </Button>
        <Button asChild>
          <Link className="text-base" to="/sign-up">
            Sign up
          </Link>
        </Button>
      </div>
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </div>
  );
};

export default Header;
