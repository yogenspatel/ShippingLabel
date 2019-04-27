import React from 'react';
import LoginHOC from './loginHOC';
import ShippingLabelMaker from '../../../features/shipping-label-maker';
import { renderError } from '../../../features/utilities/utils';

const Login = ({ username, password, handleOnChange, handleOnSubmit, isLoggedIn, error }) => {
  return !isLoggedIn ? (
    <div className="card">
      <div className="card-header text-center h3">Login (Username = test | Password = test)</div>
      <form onSubmit={handleOnSubmit}>
        {error && renderError("Incorrect Username/Password")}
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
        <div className="text-center mb-3">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  ) : <ShippingLabelMaker />; 
} 

export default (LoginHOC(Login));
