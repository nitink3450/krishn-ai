import React, { useState, useRef, useEffect } from 'react';
import s from './Spin.module.scss';

const Spinner:any = () => {
  const [speed, setSpeed] = useState(0);
  const [rotation, setRotation] = useState(0);
  const spinnerRef = useRef(null);

  useEffect(() => {
    const spinner :any = spinnerRef.current;
    let startX: any ;
    let startY: any;
    let currentX;
    let currentY;
    let isDragging = false;

    const handleMouseDown = (e:any) => {
      startX = e.clientX;
      startY = e.clientY;
      isDragging = true;
    };

    const handleMouseMove = (e :any) => {
      if (!isDragging) {
        return;
      }

      currentX = e.clientX;
      currentY = e.clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      const newRotation = rotation + deltaX - deltaY;

      setRotation(newRotation);
      spinner.style.transform = `rotate(${newRotation}deg)`;

      startX = currentX;
      startY = currentY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      setSpeed(speed + 1);
    };

    spinner.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      spinner.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [rotation, speed]);

  useEffect(() => {
    const spinner:any = spinnerRef.current;

    let intervalId = setInterval(() => {
      setRotation(rotation + speed);
      spinner.style.transform = `rotate(${rotation + speed}deg)`;
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [rotation, speed]);

  return (
    <div className={s.spinner} ref={spinnerRef}>
      <div className={s.spinnerinner}>
        <div className={s.spinnersection}>
          <div className={s.spinnersectioninner} />
        </div>
        <div className={s.spinnersection}>
          <div className={s.spinnersectioninner} />
        </div>
        <div className={s.spinnersection}>
          <div className={s.spinnersectioninner} />
        </div>
        <div className={s.spinnersection}>
          <div className={s.spinnersectioninner} />
        </div>
      </div>
    </div>
  );
}
export default Spinner;