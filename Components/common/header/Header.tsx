import Link from "next/link";
import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
export default function Header() {
  return (
    <Link
      href={"/"}
      rel="noopener noreferrer"
      className="flex justify-center items-center gap-3 fixed top-0 bg-bg-dark-200 h-12 w-fit px-3 m-5 rounded-2xl hover:bg-[#3d3d3d]  z-50 btn"
    >
      <FaArrowCircleLeft />
      Go Back
    </Link>
  );
}
