/**
 * Higher order component for Login
 * @type {Component}
 * @param {Component} - Component to render with props refined.
 * @returns {Component} - Returns a component. 
 */
import React, { Component } from 'react';
import { checkUserData } from '../../../utilities/utils';

const LoginHOC = (PassedComponent) => {
  return class LoginParent extends Component {
    constructor() {
      super();

      this.state = {
        username: '', // Represents value of user name field.
        password: '', // Represents value of password field.
        isLoggedIn: false, // Represents if user is logged in or not in a state.
        formSumbitted: false, // Represents form submited or not in a state.
      };
      this.isLoggedIn = false;
    }

    /**
     * @type {function}
     * Calls when change event triggered on the form fields
     * Updates the state on each key stroke
     */
    handleOnChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
        formSumbitted: false,
      },() => {
        if (e.keyCode === 13) {
          this.handleOnSubmit(e);
        }
      }); 
    }

    /**
     * @type {function}
     * Calls on submit of form:
     *    Sets state formSumbitted.
     *    Verifies if entered username/password is correct or not and sets isLoggedIn state accordingly.
     */
    handleOnSubmit = (e) => {
      e.preventDefault();
      const { username, password } = this.state;
      const data = {
        username,
        password
      };
      this.setState({
        formSumbitted: true,
        isLoggedIn: checkUserData(data)
      });
    }

    render() {
      const { username, password, isLoggedIn, formSumbitted } = this.state;
      const error = formSumbitted && !isLoggedIn; // If form submitted and username/password is incorrect, set error to true
      return (
        <PassedComponent
          username={username}
          password={password}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          isLoggedIn={isLoggedIn}
          error={error}
        />
      )
    }
  }
}

export default LoginHOC;
