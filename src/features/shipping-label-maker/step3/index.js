import React from 'react';
import PropTypes from 'prop-types';
import { validateFormFields, RenderFormField, setMetadata } from '../../utilities/utils';

class ShippingLabelStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      errorObj: {}
    }
    this.key = 'weight';
  }

  componentDidMount() {
    this.props.getShippingData(this.state, this.key);
    if (this.props.setShippingData && this.props.setShippingData[this.key]) {
      const { weight } = this.props.setShippingData[this.key];
      this.setState({
        weight,
        errorObj: {}
      }, () => {
        validateFormFields(this.state[this.key], this).then(() => (this.props.getShippingData(this.state, this.key)))
      });
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
