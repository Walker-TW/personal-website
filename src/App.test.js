import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders github project link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Check Out My Projects/i);
  expect(linkElement).toBeInTheDocument();
});
