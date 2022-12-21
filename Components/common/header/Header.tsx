import React from "react";
import s from "./Header.module.scss";
export default function Header() {
  return (
    <div className={s.main}>
      <div className={s.left}>Home</div>
      <ul  className={s.right}>
          <li>About us</li>
          <li>Contact</li>
          <button>Log In</button>
      </ul>
    </div>
    
  );
}
