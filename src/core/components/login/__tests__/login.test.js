/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import { Login } from "../index";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Login Component renders correctly", () => {
  it("has rendered without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
  });
  it("has called snapshot with Logged in component", () => {
    const props = {
        username: 'test',
        password: 'test',
        handleOnChange: jest.fn,
        handleOnSubmit: jest.fn,
        isLoggedIn: false,
        error: false
    }
    const tree = shallow(<Login {...props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("has called componentDidMount method", () => {
    const spy = jest.spyOn(Login.prototype, 'componentDidMount');
    const props = {
        username: 'test',
        password: 'test',
        handleOnChange: jest.fn,
        handleOnSubmit: jest.fn,
        isLoggedIn: false,
        error: false
    }
    const wrapper = shallow(<Login {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  it("has a snapshot when there is an error", () => {
    const props = {
        username: 'test',
        password: 'test',
        handleOnChange: jest.fn,
        handleOnSubmit: jest.fn,
        isLoggedIn: false,
        error: true
    }
    const tree = shallow(<Login {...props} />);
    expect(tree.find(".alert-danger").exists()).toBeTruthy();
  });
  it("has form submit button", () => {
    const props = {
        username: 'test',
        password: 'test',
        handleOnChange: jest.fn,
        handleOnSubmit: jest.fn,
        isLoggedIn: false,
        error: false
    }
    const tree = shallow(<Login {...props} />);
    expect(tree.find(".form-submit").exists()).toBeTruthy();

  });
  it("has logged in", () => {
    const props = {
        username: 'test',
        password: 'test',
        handleOnChange: jest.fn,
        handleOnSubmit: jest.fn,
        isLoggedIn: true,
        error: false
    }
    const tree = mount(<Login {...props} />);
    expect(tree.find('.progress-bar').exists()).toBeTruthy();
  });
});
