/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import ShippingProgress from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Shipping Progress Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShippingProgress />, div);
  });
  it("has called snapshot with shipping progress component", () => {
    const tree = shallow(<ShippingProgress stepProgress={3} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("calculates progress percentage when step progress = 3", () => {
    const tree = shallow(<ShippingProgress stepProgress={3} />);
    expect(tree.find(".progress-bar").prop('style')).toEqual({"width": "60%"});
  });
  it("calculates progress percentage when step progress = 1", () => {
    const tree = shallow(<ShippingProgress stepProgress={1} />);
    expect(tree.find(".progress-bar").prop('style')).toEqual({"width": "10%"});
  });
});
