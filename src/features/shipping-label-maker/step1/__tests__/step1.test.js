/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import ShippingLabelStep1 from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Step 1 Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShippingLabelStep1 />, div);
  });
  it("has called snapshot with ShippingLabel component", () => {
    const tree = shallow(<ShippingLabelStep1 />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("has called componentDidMount method", () => {
    const spy = jest.spyOn(ShippingLabelStep1.prototype, 'componentDidMount');
    const props = {
        setShippingData: {},
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep1 {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(props.getShippingData).toBeCalled();
    spy.mockClear();
  });
  it("has retrieved data on componentDidMount method", () => {
    const shippingData = {
        to: {
            name: "test 1 to",
            street: "test street 1 to",
            city: "test city 1 to",
            state: "test state 1 to",
            zip: "test zip 44444 to"
        }
    }
    const spy = jest.spyOn(ShippingLabelStep1.prototype, 'componentDidMount');
    const props = {
        setShippingData: shippingData,
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep1 {...props} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state('name')).toEqual(shippingData.to.name);
    expect(wrapper.state('street')).toEqual(shippingData.to.street);
    expect(wrapper.state('city')).toEqual(shippingData.to.city);
    expect(wrapper.state('state')).toEqual(shippingData.to.state);
    expect(wrapper.state('zip')).toEqual(shippingData.to.zip);
    
    spy.mockClear();
  });
});
