import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../components/layouts/main";
import "../styles/index.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <MainLayout>
        {/* <AnimatePresence exitBeforeEnter> */}
          <Component {...pageProps} key={router.route}/>
        {/* </AnimatePresence> */}
      </MainLayout>
    );
  }
}

export default MyApp;
