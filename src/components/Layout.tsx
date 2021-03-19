import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";

export default () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <link rel="preconnect" href="https://typekit.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Duddon Care</title>

        <link rel="stylesheet" href="https://use.typekit.net/tij0cln.css" />
      </Helmet>
      <GlobalStyles />
      <Header />
    </>
  );
};
