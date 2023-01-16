import Image from "next/image";
import React, { useEffect } from "react";

const Shoe = () => {
  // useEffect(() => {
  //   console.log("rendered");
    
  //   const name: any = document.getElementById("name");
  //   name.style.color = "red";
  //   const nn:any = document.querySelectorAll(".nike")[0];
  //   nn.style.border = "5px solid green";
  // });
  return (
    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <span className="nike font-Montserrat text-[15vw] text-black italic absolute stroke-class">
          NIKE
        </span>
        <div className="w-[50vw] h-[50vw] absolute shoeAnime">
          <Image src={"/shoe.png"} alt="shoe" fill className="object-contain" />
        </div>
      </div>
      {/* <div id="name" className="absolute top-5 left-5 text-lg text-black">
        Nitin
      </div> */}
    </>
  );
};

export default Shoe;
