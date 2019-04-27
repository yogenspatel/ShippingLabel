import React from 'react';
import { shippingRate } from './const';

const renderError = (errormsg) => (<small className="form-text text-muted alert alert-danger">{errormsg}</small>)

export const validateFormFields = (obj, context) => {
  const stateValues = Object.values(obj);
  const filteredStateValues = stateValues.filter((val) => val);
  if (stateValues.length !== filteredStateValues.length) {
    const errorObj = {};
    stateValues.map((val, i) => val === '' ? errorObj[Object.keys(obj)[i]] = true : null);
    return new Promise((resolve) => {
      context.setState({
        error: true,
        errorObj
      }, () => resolve());
    });
  }
    
  return new Promise((resolve) => {
    context.setState({
      error: false,
      errorObj: {}
    }, () => resolve());
  });  
    
}
export const RenderFormField = ({ fieldName, type, placeHolder, onChange, context }) => (
  <div className="input-group input-group-lg mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">{fieldName}</span>
    </div>
    <input
      name={fieldName}
      className="form-control"
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      value={context.state[fieldName]}
    />
    {context.state.errorObj[fieldName] && renderError(`${fieldName} is required !`)}
  </div>
);

export const setMetadata = ({ e, context, key }) => {
  context.setState({
    [e.target.name]: e.target.value
  }, () => {
    validateFormFields(context.state, context).then(() => (context.props.getShippingData(context.state, key)))
  });
}
export const calculateShippingCost = (weight, shippingOption) => parseFloat(weight * shippingRate * (shippingOption === 1 ? 1 : 1.5), 10).toFixed(2)
export const doLoginAction = ({ username, password }) => {
  if(username === 'test' && password === 'test') {
    return true;
  }
  return false;
}
export const checkIfUserLoggedInAction = () => {
  return true;
}
export const shippingData = {
    dataObj: {},
    get data() {
      return this.dataObj;
    },
    set data(dataObj) {
      this.dataObj = dataObj;
    }
}
