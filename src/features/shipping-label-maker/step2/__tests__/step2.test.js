/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import ShippingLabelStep2 from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Step 2 Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShippingLabelStep2 />, div);
  });
  it("has called snapshot with ShippingLabel component", () => {
    const tree = shallow(<ShippingLabelStep2 />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("has called componentDidMount method", () => {
    const spy = jest.spyOn(ShippingLabelStep2.prototype, 'componentDidMount');
    const props = {
        setShippingData: {},
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep2 {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(props.getShippingData).toBeCalled();
    spy.mockClear();
  });
  it("has retrieved data on componentDidMount method", () => {
    const shippingData = {
        from: {
            name: "test 1 from",
            street: "test street 1 from",
            city: "test city 1 from",
            state: "test state 1 from",
            zip: "test zip 44444 from"
        }
    }
    const spy = jest.spyOn(ShippingLabelStep2.prototype, 'componentDidMount');
    const props = {
        setShippingData: shippingData,
        getShippingData: jest.fn()
    }
    const wrapper = shallow(<ShippingLabelStep2 {...props} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state('name')).toEqual(shippingData.from.name);
    expect(wrapper.state('street')).toEqual(shippingData.from.street);
    expect(wrapper.state('city')).toEqual(shippingData.from.city);
    expect(wrapper.state('state')).toEqual(shippingData.from.state);
    expect(wrapper.state('zip')).toEqual(shippingData.from.zip);
    
    spy.mockClear();
  });
});
