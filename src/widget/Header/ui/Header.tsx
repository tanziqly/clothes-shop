import { Button } from "@/shared/ui/shadcn/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between w-full max-w-[1440px] px-4 py-4 mx-auto">
      <div className="flex items-center">
        <h3 className="font-bold text-2xl pr-4 mr-4 border-r border-neutral-300 dark:border-neutral-700">
          TellNur<span className="text-primary">.shop</span>
        </h3>
        <nav>
          <ul className="flex space-x-4 dark:text-neutral-500">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All products</Link>
            </li>
            <li>
              <Link to="/">New Arrivals</Link>
            </li>
            <li>
              <Link to="/">Brands</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <Input type="text" /> */}
      <div className="flex items-center space-x-2">
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
    </div>
  );
};

export default Header;
