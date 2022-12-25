import React from "react";

export default function Header() {
  return (
    <div className="fixed top-0 flex bg-black h-12 w-screen justify-between items-center px-20 ">
      <div>Home</div>
      <ul className="flex justify-between border-red-800">
        <li className="px-5">About us</li>
        <li className="px-5">Contact us</li>
        <li className="px-5">Orders</li>
      </ul>
    </div>
  );
}
