import React, { useState, useEffect, useRef } from "react";
import s from "./Spin.module.scss";
import Image from "next/image";
// interface Props {
//   size: number;
// }

const Spinner: React.FC = () => {
  const target : any = useRef(null);
  function increaseSpeed() {
    var currentSpeed = 1;
    let targetSpeed = 0.08;
    var interval = setInterval(function () {
      currentSpeed = currentSpeed - 0.1;
      // if (currentSpeed = targetSpeed) {
      //   clearInterval(interval);
      // }
      console.log(currentSpeed);
      target.current.style.animationDuration = `${currentSpeed}s`
    }, 500);
    setInterval(()=>{
      clearInterval(interval);
    },4500)
  }

  return (
    <div
      className={s.spinner}
      ref={target}
      onClick={increaseSpeed}
    >
      <Image height={540} width={540} src="/mainSpinner.png" alt=""/>
    </div>
  );
};

export default Spinner;
