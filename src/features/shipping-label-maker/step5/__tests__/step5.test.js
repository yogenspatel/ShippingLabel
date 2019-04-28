/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import ShippingLabelStep5 from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockData = {
    to: {
        name: "test 1 to",
        street: "test street 1 to",
        city: "test city 1 to",
        state: "test state 1 to",
        zip: "test zip 44444 to"
    },
    from: {
        name: "test 2 from",
        street: "test street 2 from",
        city: "test city 2 from",
        state: "test state 2 from",
        zip: "test zip 44444 2 from"
    },
    shippingOption: {
        shippingOption: 2
    },
    weight: {
        weight: 5
    }
}

describe("Step 5 Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShippingLabelStep5 />, div);
  });
  it("has called snapshot with ShippingLabel component", () => {
    const tree = shallow(<ShippingLabelStep5 setShippingData={mockData} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
