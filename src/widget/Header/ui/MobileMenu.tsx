import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/shadcn/button";
import InputSearch from "@/features/InputSearch/ui/InputSearch";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => (
  <div className="lg:hidden absolute top-[70px] border-l right-0 w-full max-w-[450px] h-screen bg-neutral-100 dark:bg-neutral-950 shadow-lg rounded-lg p-4">
    <ul className="flex flex-col gap-2 space-y-2">
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
        <InputSearch className="-mx-4" />
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
    </ul>
  </div>
);

export default MobileMenu;
