import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { shallowToJson } from "enzyme-to-json";

import { shallow } from "enzyme";

describe("<App/>", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

test("renders github project link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Check Out My Projects/i);
  expect(linkElement).toBeInTheDocument();
});
