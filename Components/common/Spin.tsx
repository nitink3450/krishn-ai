import React, { useState, useEffect } from "react";
import s from "./Spin.module.scss";
interface Props {
  size: number;
}

const Spinner: React.FC<Props> = ({ size }) => {
  const [rotation, setRotation] = useState(360);
  //   const [speed, setSpeed] = useState(1);
  console.log(rotation);

  //   useEffect(() => {
  let interval: any;
  let timer: any;

  const onClick = () => {
    interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 10);
    }, 50);

    //   setInterval(() => {
    //     clearInterval(interval);
    //   }, 10000);
  };

  // const onMouseUp = () => {
  //   clearInterval(interval);
  //   clearInterval(timer);
  //   setSpeed(1);
  // };

  // document.addEventListener('click', onClick);
  // document.addEventListener('mouseup', onMouseUp);

  // return () => {
  //   document.removeEventListener('click', onClick);
  //   document.removeEventListener('mouseup', onMouseUp);
  // };
  //   }, [speed]);

  return (
    <div
      className={s.spinner}
      onClick={()=>{onClick()}}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      SPIN
    </div>
  );
};

export default Spinner;
