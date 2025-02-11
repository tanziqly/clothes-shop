import React, { FC } from "react";
import { Link } from "react-router-dom";

interface DressStyleButtonProps {
  buttonText: string;
  image: string;
  className: string;
}

const DressStyleButton: FC<DressStyleButtonProps> = ({
  buttonText,
  image,
  className,
}) => {
  return (
    <Link
      className="relative bg-white overflow-hidden rounded-[20px] flex justify-end"
      to="/"
    >
      <img src={image} alt="" className={`${className}`} />
      <span className="absolute top-6 left-9 font-bold text-3xl">
        {buttonText}
      </span>
    </Link>
  );
};

export default DressStyleButton;
