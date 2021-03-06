/**
 * @type {Component}
 * Render fourth step of the shipping label maker
 * Renders 2 radio fields with shipping option - Ground, Priority
 * @property setShippingData - Retrieves shipping data by key which was set by the state in the parent (Wizard) component.
 * @property getShippingData - Function callback to set shipping data in a state from parent component.
 */

import React from 'react';
import PropTypes from 'prop-types';

class ShippingLabelStep4 extends React.Component {
  constructor(props) {
    super(props);
    this.key = "shippingOption";
    this.state = {
      shippingOption: 1,
      errorObj: {}
    }
    
  }

  componentDidMount() {
    // If data is set, retrieve form fields data
    if (this.props.setShippingData && this.props.setShippingData[this.key]) {
      const { shippingOption } = this.props.setShippingData[this.key];
      this.setState({
        shippingOption
      }, () => {
        this.props.getShippingData(this.state, this.key);
      });
    }
  }

    setShippingOptionMetadata = (e) => {
      this.setState({
        shippingOption: e.currentTarget.value * 1 // Convert to Int
      }, () => {
        this.props.getShippingData(this.state, this.key);
      });
    }

    render() {
      return (
        <div className="card">
          <div className="h4 card-header">Select the Shipping Option</div>
          <div className="card-body">
            <div className="form-check">
              <input 
                type="radio"
                value="1"
                name="shippingOption_1"
                onChange={this.setShippingOptionMetadata}
                checked={this.state.shippingOption === 1}
              />
              <label className="form-check-label ml-2">Ground</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                value="2"
                name="shippingOption_2"
                onChange={this.setShippingOptionMetadata}
                checked={this.state.shippingOption === 2}
              /><label className="form-check-label ml-2">Priority</label>
            </div>
          </div>
        </div>
      );
    }
}

ShippingLabelStep4.propTypes = {
  setShippingData: PropTypes.object,
  getShippingData: PropTypes.func
}

ShippingLabelStep4.defaultProps = {
  setShippingData: {},
  getShippingData: () => {}
}

export default ShippingLabelStep4;
