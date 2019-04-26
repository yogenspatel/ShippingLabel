import React from 'react';
import { shippingRate } from './const';

const renderError = (errormsg) => {
    return (<span>{errormsg}</span>);
}

export const validateFormFields = (obj, context) => {
    const stateValues = Object.values(obj);
    const filteredStateValues = stateValues.filter((val) => val);
    if(stateValues.length !== filteredStateValues.length) {
        let errorObj = {};
        stateValues.map((val, i) => val === '' ? errorObj[Object.keys(obj)[i]] = true : null);
        return new Promise((resolve) => {
            context.setState({
                error: true,
                errorObj
            }, () => resolve());
        });
    }
    else {
        return new Promise((resolve) => {
            context.setState({
                error: false,
                errorObj: {}
            }, () => resolve());
        });  
    }
}
export const RenderFormField = ({fieldName, type, placeHolder, onChange, context}) => (
    <div>
        <label>{fieldName}: </label>
        <input name={fieldName}
            type={type}
            placeholder={placeHolder}
            onChange={onChange}
            value={context.state[fieldName]}
        />
        {context.state.errorObj[fieldName] && renderError(`${fieldName} is Required !`)}
    </div>
);

export const setMetadata = ({e, context, key}) => {
    context.setState({
        [e.target.name]: e.target.value
    }, () => {
        validateFormFields(context.state, context).then(() => (context.props.getShippingData(context.state, key)))
    });
}
export const calculateShippingCost = (weight, shipping_option) => {
    return parseFloat(weight * shippingRate * (shipping_option === 1 ? 1 : 1.5), 10).toFixed(2);
}
