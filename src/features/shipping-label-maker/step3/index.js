/**
 * @type {Component}
 * Render third step of the shipping label maker
 * Renders a input field with weight
 * Validates form field
 * @property setShippingData - Retrieves shipping data by key which was set by the state in the parent (Wizard) component.
 * @property getShippingData - Function callback to set shipping data in a state from parent component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { validateFormFields, RenderFormField, setMetadata } from '../../../utilities/utils';
import { formValidationRules } from '../../../utilities/const';

class ShippingLabelStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.key = "weight";
    this.state = {
      weight: 0,
      errorObj: formValidationRules[this.key]
    }
    
  }

  componentDidMount() {
    // If data is set, retrieve form fields data
    if (this.props.setShippingData && this.props.setShippingData[this.key]) {
      const { weight } = this.props.setShippingData[this.key];
      this.setState({
        weight,
        errorObj: {}
      }, () => {
        validateFormFields(this.state[this.key], this).then(() => (this.props.getShippingData(this.state, this.key)))
      });
    }
    else {
      // The input gets invalidated, init error object, so that it prevents to go to next step.
      this.props.getShippingData(this.state, this.key);
    }
  }

  render() {
    return (
      <div className="card">
        <div className="h4 card-header">Enter the Package Weight</div>
        <div className="card-body">
          <RenderFormField
            fieldName="weight"
            type="number"
            placeHolder="Enter Weight"
            onChange={(e) => setMetadata({ e, context: this, key: this.key })}
            context={this}
          />
        </div>
      </div>
    );
  }
}

ShippingLabelStep3.propTypes = {
  setShippingData: PropTypes.object,
  getShippingData: PropTypes.func
}

ShippingLabelStep3.defaultProps = {
  setShippingData: {},
  getShippingData: () => {}
}

export default ShippingLabelStep3;
