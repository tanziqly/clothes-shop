import { Link } from "react-router-dom";
import { Rating } from "../../Rating/ui/Rating";
import productImg from "./assets/productImg.png";

const ProductCard = () => {
  return (
    <Link to="/">
      <article className="flex flex-col gap-4">
        <div className="bg-[#F0EEED] overflow-hidden dark:bg-neutral-800 w-[295px] h-[295px] rounded-xl">
          <img src={productImg} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">T-SHIRT WITH TAPE DETAILS</h3>
          <Rating rating={4} />
          <span className="text-2xl font-bold">$120</span>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
