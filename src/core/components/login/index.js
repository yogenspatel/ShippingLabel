import React from 'react';
import LoginHOC from './loginHOC';
import ShippingLabelMaker from '../../../features/shipping-label-maker';
import { renderError } from '../../../utilities/utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.userNameInput = null;
  }
  componentDidMount() {
    setTimeout(() => {
      this.userNameInput.focus();
    }, 200);
  }
  render() {
    const { username, password, handleOnChange, handleOnSubmit, isLoggedIn, error } = this.props;
    return !isLoggedIn ? (
      <div className="card">
        <div className="card-header text-center h3">Login (Username = test | Password = test)</div>
        <form onSubmit={handleOnSubmit}>
          {error && renderError("Incorrect Username/Password")}
          <div className="input-group input-group-lg mb-3 ml-5 mt-5 pr-5">
            <div className="input-group-prepend">
              <span className="input-group-text">Username</span>
            </div>
            <input
              type="text"
              autoComplete="new-username"
              className="form-control"
              name="username"
              value={username}
              onChange={handleOnChange}
              ref={(input) => { this.userNameInput = input; }}
            />
          </div>
          <div className="input-group input-group-lg mb-3 ml-5 pr-5">
            <div className="input-group-prepend">
              <span className="input-group-text">Password</span>
            </div>
            <input
              type="password"
              autoComplete="new-password"
              className="form-control"
              name="password" value={password}
              onChange={handleOnChange}
            />
          </div>
          <div className="text-center mb-3">
            <input className="btn btn-primary form-submit" type="submit" value="Login" />
          </div>
        </form>
      </div>
    ) : <ShippingLabelMaker />; 
  }
} 
export { Login, ShippingLabelMaker };
export default (LoginHOC(Login));
