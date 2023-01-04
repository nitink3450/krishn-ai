import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed top-0 flex bg-bg-dark-200 h-12 w-screen justify-between items-center px-20 5xx:overflow-auto z-50">
      <Link href={"/"} rel="noopener noreferrer">
          <div>Home</div>
        </Link>
      <ul className="flex justify-between border-red-800">
        <Link href={"/tailwindPage"} rel="noopener noreferrer">
          <li className="px-5">Tailwind</li>
        </Link>
        <Link href={"/infiniteScroll"} rel="noopener noreferrer">
          <li className="px-5">InfiniteScroll</li>
        </Link>
        <Link href={"/tsxPage"} rel="noopener noreferrer">
          <li className="px-5">Typescript</li>
        </Link>
        <Link href={"/sortPage"} rel="noopener noreferrer">
          <li className="px-5">Sort</li>
        </Link>
      </ul>
    </div>
  );
}
