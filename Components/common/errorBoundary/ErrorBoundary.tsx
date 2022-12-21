import React from 'react'
import s from "./ErrorBoundary.module.scss";
// interface Props{
//   setIsError : any;
// }
export default function ErrorBoundary({setIsError}:any) {
  return (
    <div className={s.main}>
      <div className={s.text}>Something Wrong!!!</div>
      <button onClick={setIsError} className={s.btn}>Try again</button>
    </div>
  )
}