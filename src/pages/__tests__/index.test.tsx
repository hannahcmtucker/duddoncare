import React from "react";
import { render } from "@testing-library/react";
import IndexPage from "../index";

describe("Index Page", () => {
  it("displays the right text", () => {
    const { getByText } = render(<IndexPage />);

    getByText(/hello world/i);
  });
});
