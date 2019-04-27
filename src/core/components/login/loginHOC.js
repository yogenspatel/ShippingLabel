import React, { Component } from 'react';
import { checkUserData } from '../../../features/utilities/utils';

const LoginHOC = (PassedComponent) => {
  return class LoginParent extends Component {
    constructor() {
      super();

      this.state = {
        username: '',
        password: '',
        isLoggedIn: false,
        formSumbitted: false,
      };
      this.isLoggedIn = false;
    }

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
      const error = !isLoggedIn && formSumbitted;
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
