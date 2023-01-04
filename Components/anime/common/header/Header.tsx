import Link from "next/link";
import React from "react";
import s from "./Header.module.scss";
export default function Header() {
  return (
    <div className={s.main}>
      <Link href={"/"} rel="noopener noreferrer">
        <div className={s.left}>Home</div>
      </Link>
      <ul className={s.right}>
        <Link href={"/tailwindPage"} rel="noopener noreferrer">
          <li className="px-5">Tailwind</li>
        </Link>
        <Link href={"/infiniteScroll"} rel="noopener noreferrer">
          <li className="px-5">InfiniteScroll</li>
        </Link>
        <Link href={"/tsxPage"} rel="noopener noreferrer">
          <li className="px-5">Typescript</li>
        </Link>
      </ul>
    </div>
  );
}
