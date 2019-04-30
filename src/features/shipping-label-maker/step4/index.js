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
    if (this.props.setShippingData && this.props.setShippingData[this.key]) {
      const { shippingOption } = this.props.setShippingData[this.key];
      this.setState({
        shippingOption
      }, () => {
        this.props.getShippingData(this.state, this.key);
      });
    }
    else {
      this.props.getShippingData(this.state, this.key);
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
