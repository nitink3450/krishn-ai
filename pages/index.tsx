import React from "react";
import Anime from "../Components/anime/index";
import Header from "../Components/tailwind/common/header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center">
        <h1 className="font-Mohave text-[44px] md:text-[84px]">Home Page</h1>
      </div>
    </>
  );
};

export default Home;
