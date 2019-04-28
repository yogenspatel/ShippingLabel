/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import ShippingLabelStep3 from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Step 3 Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShippingLabelStep3 />, div);
  });
  it("has called snapshot with ShippingLabel component", () => {
    const tree = shallow(<ShippingLabelStep3 />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("has called componentDidMount method", () => {
    const spy = jest.spyOn(ShippingLabelStep3.prototype, 'componentDidMount');
    const props = {
        setShippingData: {},
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep3 {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(props.getShippingData).toBeCalled();
    spy.mockClear();
  });
  it("has retrieved data on componentDidMount method", () => {
    const shippingData = {
        weight: {
            weight: 5
        }
    }
    const spy = jest.spyOn(ShippingLabelStep3.prototype, 'componentDidMount');
    const props = {
        setShippingData: shippingData,
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep3 {...props} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state('weight')).toEqual(shippingData.weight.weight);
    spy.mockClear();
  });
});
