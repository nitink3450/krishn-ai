import { Html, Head, Main, NextScript } from "next/document";
import Header from "../Components/common/header/Header";
import React from "react";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Header />
      </body>
    </Html>
  );
}
