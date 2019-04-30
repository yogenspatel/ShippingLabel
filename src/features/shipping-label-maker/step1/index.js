import React from 'react';
import PropTypes from 'prop-types';
import { validateFormFields, RenderFormField, setMetadata } from '../../../utilities/utils';
import { formValidationRules, fromToFormFields } from '../../../utilities/const';

class ShippingLabelStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.key = "to";
    this.state = {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "", 
      errorObj: formValidationRules[this.key]
    }
    
  }

  componentDidMount() {
    // If data is set, retrieve form fields data
    if (this.props.setShippingData && this.props.setShippingData[this.key]) {
      const { name, street, city, state, zip } = this.props.setShippingData[this.key];
      this.setState({
        name, street, city, state, zip,
        errorObj: {}
      }, () => {
        validateFormFields(this.state, this).then(() => (this.props.getShippingData(this.state, this.key)))
      });
    }
    else {
      this.props.getShippingData(this.state, this.key);
    }
  }
    
    renderFormFields = () => {
      return fromToFormFields.map((fieldName, i) => (
        <RenderFormField
          key={`sender_${i}`}
          id={`sender_${i}`}
          fieldName={fieldName}
          type="text"
          placeHolder={`Enter ${fieldName}`}
          onChange={(e) => setMetadata({ e, context: this, key: this.key })}
          context={this}
        />
      ));
    }

    render() {
      return (
        <div className="card">
          <div className="h4 card-header">Enter the Sender&lsquo;s Address</div>
          <div className="card-body">
            {this.renderFormFields()}
          </div>
        </div>
      );
    }
}

ShippingLabelStep1.propTypes = {
  setShippingData: PropTypes.object,
  getShippingData: PropTypes.func
}

ShippingLabelStep1.defaultProps = {
  setShippingData: {},
  getShippingData: () => {}
}

export default ShippingLabelStep1;
