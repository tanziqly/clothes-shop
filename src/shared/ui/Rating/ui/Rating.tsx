import { Star } from "lucide-react";
import { FC } from "react";

interface RatingProps {
  rating: number;
  className?: string;
}

export const Rating: FC<RatingProps> = ({ rating, className }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`w-5 h-5 ${
        index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }`}
    />
  ));

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars}
      <span className="ml-2 text-neutral-500">
        <span className="text-black dark:text-white">{rating}</span>/5
      </span>
    </div>
  );
};
