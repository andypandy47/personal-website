import React from "react";
import type { AppProps } from "next/app";
import "styles/globals.css";

import { Inter } from "@next/font/google";
import Header from "components/header";
import Footer from "components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} className={inter.className} />
      <Footer />
    </>
  );
}
