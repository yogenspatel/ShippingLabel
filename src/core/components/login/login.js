import React from 'react';
import LoginHOC from './loginHOC';
import ShippingLabelMaker from '../../../features/shipping-label-maker';

class Login extends React.Component {
  render() {
    console.log(this.props);
    const { username, password, handleOnChange, handleOnSubmit, isLoggedIn } = this.props;
    return !isLoggedIn ? (
      <div className="card">
        <div className="card-header text-center h3">Login</div>
        <form onSubmit={handleOnSubmit}>
          <div className="input-group input-group-lg mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Username</span>
            </div>
            <input type="text" className="form-control" name="username" value={username} onChange={handleOnChange} />
          </div>
          <div className="input-group input-group-lg mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Password</span>
            </div>
            <input type="password" name="password" value={password} onChange={handleOnChange} />
          </div>
          <div className="form-action">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    ) : <ShippingLabelMaker />;
  }
} 

export default (LoginHOC(Login));
