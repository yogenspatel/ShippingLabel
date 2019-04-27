import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkIfUserLoggedInAction, doLoginAction } from '../../../features/utilities/utils';

const LoginHOC = (PassedComponent) => {
  return class LoginParent extends Component {
    constructor() {
      super();

      this.state = {
        username: '',
        password: '',
        isLoggedIn: false
      };
      this.isLoggedIn = false;
    }

    componentDidMount() {
    //   const ifLoggedIn = checkIfUserLoggedInAction();
    //   if (ifLoggedIn) {
        
    //   }
    }

    handleOnChange = (e) => {
      const { name, value } = e.target;
      console.log('handleOnChange: ', name, value);
      this.setState({
        [name]: value,
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
        isLoggedIn: doLoginAction(data)
      });
    //   this.isLoggedIn = doLoginAction(data);
    }

    render() {
      const { username, password, isLoggedIn } = this.state;
      return (
        <PassedComponent
          username={username}
          password={password}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          isLoggedIn={isLoggedIn}
        />
      )
    }
  }
}

export default LoginHOC;
