import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  src: String;
  category: String;
}

const CategoryCard: React.FC<CardProps> = ({ src, category }) => {
  return (
    <li className="shadow-2xl group hover:scale-[1.1] p-[10px] bg-white hover:bg-red-400 rounded-lg w-fit transition duration-500 cursor-pointer ">
      <div className="border rounded-full h-[100px] relative w-[100px]">
        <Image
          src={`/${src}.jpg`}
          alt="img"
          fill
          className="object-contain rounded-full  shadow-lg"
        />
      </div>
      <div className="hover:shadow-lg  text-black mt-[10px] flex justify-center font-Mohave bg-white rounded-md">
        {category}
      </div>
    </li>
  );
};

export default CategoryCard;
