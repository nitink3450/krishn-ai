import { useRouter } from "next/router";
import React from "react";

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query; //added initial blank array to avoid error
  // console.log(params);
  if (params.length === 2) {
    return (
      <h1 className="font-Mohave text-[44px] md:text-[84px]">
        feature is {params[0]} and Concept is {params[1]}
      </h1>
    );
  } else if (params.length < 2) {
    return (
      <h1 className="font-Mohave text-[44px] md:text-[84px]">
        feature is {params[0]}
      </h1>
    );
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <h1 className="font-Mohave text-[44px] md:text-[84px]">Doc Page</h1>
      </div>
    </>
  );
};

export default Docs;
