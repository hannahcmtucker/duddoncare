import * as React from "react";
import { Global } from "@emotion/react";
import globalStyles from "../styles/globalStyles";

const IndexPage = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <div>Hello world</div>
    </>
  );
};

export default IndexPage;
