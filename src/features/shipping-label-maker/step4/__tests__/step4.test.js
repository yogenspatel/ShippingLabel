/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import ShippingLabelStep4 from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Step 4 Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShippingLabelStep4 />, div);
  });
  it("has called snapshot with ShippingLabel component", () => {
    const tree = shallow(<ShippingLabelStep4 />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("has called componentDidMount method", () => {
    const spy = jest.spyOn(ShippingLabelStep4.prototype, 'componentDidMount');
    const props = {
        setShippingData: {},
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep4 {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(props.getShippingData).toBeCalled();
    spy.mockClear();
  });
  it("has retrieved data on componentDidMount method", () => {
    const shippingData = {
        shippingOption: {
            shippingOption: 2
        }
    }
    const spy = jest.spyOn(ShippingLabelStep4.prototype, 'componentDidMount');
    const props = {
        setShippingData: shippingData,
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep4 {...props} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state('shippingOption')).toEqual(shippingData.shippingOption.shippingOption);
    spy.mockClear();
  });
});
