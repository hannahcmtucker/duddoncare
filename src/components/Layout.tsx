import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Hero from "./Hero";
import SEO from "./SEO";

export default () => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Header />
      <Hero />
    </>
  );
};
