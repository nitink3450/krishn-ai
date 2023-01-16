import React from "react";

const Lable = ({ title }: any) => {
  console.log(title);
  return (
    <div className="flex justify-center items-center bg-white">
      <h1 className=" absolute z-50 top-5 border font-Mohave font-bold text-[34px] sm:text-[55px] md:text-[66px] lg:text-[37px] xl:text-[38px] text-center bg-black px-10 rounded-2xl mt-5 text-white font-stroke">
        {title}
      </h1>
    </div>
  );
};

export default Lable;
