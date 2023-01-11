import Image from "next/image";
import React from "react";

const Shoe = () => {
  return (
    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <span className="font-Montserrat text-[15vw] text-black italic absolute stroke-class">
          NIKE
        </span>
        <div className="w-[50vw] h-[50vw] absolute shoeAnime">
          <Image src={"/shoe.png"} alt="shoe" fill className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default Shoe;
