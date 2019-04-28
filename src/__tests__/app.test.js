/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";


describe("App renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  it("has called snapshot with App component", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
