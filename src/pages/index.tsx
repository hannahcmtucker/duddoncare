import * as React from "react";
import { Global } from "@emotion/react";
import globalStyles from "../styles/globalStyles";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
    </>
  );
};

export default IndexPage;
