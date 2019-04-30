import React from 'react';
import { shippingRate } from './const';

/**
 * @type {function}
 * Renders error
 * @param {string} errormsg error message to render
 * @returns {Component}
 */
export const renderError = (errormsg) => (<small className="form-text text-muted alert alert-danger mb-0">{errormsg}</small>)

/**
 * @type {function}
 * Validates Form fields
 *   if any of the form field is invalidates sets error object
 *   if validates, then set error object to `null`.
 * @param {object} obj 
 * @param {object} context
 * @returns promise and resolves once setState function has finished execution. This is to avoid race condition.
 */
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

/**
 * @type {function}
 * Calls when blur event triggered on any form field. and it validates the value and sets state by fieldName accordingly.
 * @param {object} - {object, string} - This object contains context and fieldName
 * 
 */
function onBlur({context, fieldName}) {
  if(!context.state[fieldName]) {
    context.setState({
      [`touched${fieldName}`]: true
    });
  }
  else {
    context.setState({
      [`touched${fieldName}`]: false
  });
  }
}

/**
 * @type {Component}
 * Renders a Form field
 * @param {object} 
 * {id: string}
 * {fieldName: string}
 * {type: string}
 * {placeHolder: string}
 * {onChange: function}
 * {context: object}
 * @returns {Compoent}
 */
export const RenderFormField = ({ id, fieldName, type, placeHolder, onChange, context }) => (
  <div className="input-group input-group-lg mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">{fieldName}</span>
    </div>
    <input
      id={id}
      name={fieldName}
      className="form-control"
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      onBlur={() => onBlur({context, fieldName})}
      value={context.state[fieldName]}
    />
    {context.state[`touched${fieldName}`] && context.state.errorObj[fieldName] && renderError(`${fieldName} is required !`)}
  </div>
);

/**
 * @type {function}
 * Sets form data when change event is triggered.
 * @param {object}
 * {e: event object}
 * {context: object}
 * {key: string}
 */
export const setMetadata = ({ e, context, key }) => {
  context.setState({
    [e.target.name]: e.target.value
  }, () => {
    validateFormFields(context.state, context).then(() => (context.props.getShippingData(context.state, key)))
  });
}

/**
 * Calculates shipping cost
 * @type {function}
 * @param {Float} weight 
 * @param {integer} shippingOption 
 * @returns {Float} shipping cost
 */
export const calculateShippingCost = (weight, shippingOption) => parseFloat(weight * shippingRate * (shippingOption === 1 ? 1 : 1.5), 10).toFixed(2)
/**
 * @type {function}
 * Dummy function to check user name and password
 * @param {object}
 *  {username: string}
 *  {password: string}
 * @returns {boolean} - if username = test and password = test, return true, otherwise return false.
 */
export const checkUserData = ({ username, password }) => {
  if(username === 'test' && password === 'test') {
    return true;
  }
  return false;
}

/**
 * Getter and setter method to get/set shipping data.
 */
export const shippingData = {
    dataObj: {},
    get data() {
      return this.dataObj;
    },
    set data(dataObj) {
      this.dataObj = dataObj;
    }
}
