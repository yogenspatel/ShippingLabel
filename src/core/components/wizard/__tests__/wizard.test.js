/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import Wizard from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Wizard Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Wizard />, div);
  });
  it("has called snapshot with Wizard component", () => {
    const props = {
        steps: [1,2,3,4,5],
        onComplete: jest.fn
    }
    const tree = shallow(<Wizard {...props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("has clicked on next without error", () => {
    const props = {
        steps: [1,2,3,4,5],
        onComplete: jest.fn
    }
    const wrapper = shallow(<Wizard {...props} />);
    expect(wrapper.find(".next").length).toBe(1);
    wrapper.setState({
        step: 1,
        totalSteps: 5,
        error: false
    });
    wrapper.find(".next").simulate("click");
    expect(wrapper.state('step')).toBe(2);
  });

  it("has clicked on next button with error state true", () => {
    const props = {
        steps: [1,2,3,4,5],
        onComplete: jest.fn
    }
    const wrapper = shallow(<Wizard {...props} />);
    expect(wrapper.find(".next").length).toBe(1);
    wrapper.setState({
        step: 1,
        totalSteps: 5,
        error: true
    });
    wrapper.find(".next").simulate("click");
    expect(wrapper.state('step')).toBe(1);
  });
  it("has clicked on prev button with error state true", () => {
    const props = {
        steps: [1,2,3,4,5],
        onComplete: jest.fn
    }
    const wrapper = shallow(<Wizard {...props} />);
    expect(wrapper.find(".prev").length).toBe(1);
    wrapper.setState({
        step: 4,
        totalSteps: 5,
        error: true
    });
    wrapper.find(".prev").simulate("click");
    expect(wrapper.state('step')).toBe(3);
  });
  it("has clicked on prev button", () => {
    const props = {
        steps: [1,2,3,4,5],
        onComplete: jest.fn
    }
    const wrapper = shallow(<Wizard {...props} />);
    expect(wrapper.find(".prev").length).toBe(1);
    wrapper.setState({
        step: 4,
        totalSteps: 5,
        error: false
    });
    wrapper.find(".prev").simulate("click");
    expect(wrapper.state('step')).toBe(3);
  });
  it("has clicked on next button on the last step", () => {
    const props = {
        steps: [1,2,3,4,5],
        onComplete: jest.fn()
    }
    const wrapper = shallow(<Wizard {...props} />);
    expect(wrapper.find(".next").length).toBe(1);
    wrapper.setState({
        step: 5,
        totalSteps: 5,
        error: false
    });
    expect(wrapper.find(".next").text()).toEqual("Confirm");
    wrapper.find(".next").simulate("click");
    expect(wrapper.state('step')).toBe(5);
    expect(props.onComplete).toBeCalled();
  });
});
