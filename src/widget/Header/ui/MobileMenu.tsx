import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/shadcn/button";
import InputSearch from "@/features/InputSearch/ui/InputSearch";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => (
  <div className="lg:hidden absolute top-[70px]  right-0 w-full max-w-[450px] h-full bg-white dark:bg-background shadow-lg rounded-lg p-4">
    <ul className="space-y-2">
      <li className="w-full">
        <Link className="hover:text-black w-full" to="/" onClick={onClose}>
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-black" to="/" onClick={onClose}>
          All products
        </Link>
      </li>
      <li>
        <Link className="hover:text-black" to="/" onClick={onClose}>
          New Arrivals
        </Link>
      </li>
      <li>
        <Link className="hover:text-black" to="/" onClick={onClose}>
          Brands
        </Link>
      </li>
      <li>
        <div className="items-center space-x-2">
          <Button variant="outline" asChild>
            <Link className="text-base" to="/">
              Sign in
            </Link>
          </Button>
          <Button asChild>
            <Link className="text-base" to="/">
              Sign up
            </Link>
          </Button>
        </div>
      </li>
      <li>
        <InputSearch className="-mx-4" />
      </li>
    </ul>
  </div>
);

export default MobileMenu;
