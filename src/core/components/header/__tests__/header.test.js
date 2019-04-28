/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import Header from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Header Component renders correctly", () => {
  it("Header renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });
  it("Header Component with snapshot", () => {
    const tree = shallow(<Header />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});
