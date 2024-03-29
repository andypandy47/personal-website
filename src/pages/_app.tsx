import React from "react";
import type { AppProps } from "next/app";
import "styles/globals.css";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} className={inter.className} />
    </>
  );
}
