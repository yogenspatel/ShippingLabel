import React from 'react';
import PropTypes from 'prop-types';
import { calculateShippingCost } from '../../utilities/utils';

class ShippingLabel extends React.Component {
  renderFrom() {
    const { from } = this.props.shippingData;
    return from ? (
      <div className="col-sm-6">
        <div className="card">
          <div className="h5 card-header">From:</div>
          <div className="card-body">
            <p>Name: {from.name}</p>
            <p>Address: {from.street}</p>
            <p>City: {from.city}</p>
            <p>State: {from.state} zip: {from.zip}</p>
          </div>
        </div>
      </div>
    ) : null;
  }

  renderTo() {
    const { to } = this.props.shippingData;
    return to ? (
      <div className="col-sm-6">
        <div className="card">
          <div className="h5 card-header">To:</div>
          <div className="card-body">
            <p>Name: {to.name}</p>
            <p>Address: {to.street}</p>
            <p>City: {to.city}</p>
            <p>State: {to.state} zip: {to.zip}</p>
          </div>
        </div>
      </div>
    ) : null;
  }

  renderShippingOption() {
    const { shippingOption } = this.props.shippingData;
    return shippingOption ? 
      <div className="card">
        <div className="card-header">
          <span className="h5">Shipping Option:</span> {shippingOption.shippingOption === 1 ?
            'Ground' : 'Priority'}
        </div>
      </div> : null;
  }

  renderWeight() {
    const { weight } = this.props.shippingData;
    return weight ? 
      <div className="card">
        <div className="card-header">
          <span className="h5">Package Weight:</span> {weight.weight}
        </div>
      </div> : null;
  }
 
  renderShippingCost() {
    const { weight, shippingOption } = this.props.shippingData;
    if (weight && shippingOption) {
      const shippingCost = calculateShippingCost(weight.weight, shippingOption.shippingOption);
      return (<div className="card">
        <div className="card-header">
          <span className="h5">Shipping Cost:</span> ${shippingCost}
        </div>
      </div>);
    }
    return null;
  }

  render() {
    return this.props.shippingData ? (
      <div className="card">
        <div className="card-header h3">Shipping Label</div>
        <div className="card-body">
          <button className="btn btn-primary mb-3" onClick={() => window.print()}>Print this Label</button>
          <div className="row mb-3">
            {this.renderTo()}
            {this.renderFrom()}
          </div>
          {this.renderWeight()}
          {this.renderShippingOption()}
          {this.renderShippingCost()}
        </div>
      </div>
    ) : null;
  }
}

ShippingLabel.propTypes = {
  shippingData: PropTypes.object,
}

ShippingLabel.defaultProps = {
  shippingData: {}
}

export default ShippingLabel;
