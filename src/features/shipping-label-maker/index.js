/**
 * @type {Component}
 * Renders a Shipping label maker which is resposible of following:
 * Render a Wizard component if all steps are not done.
 * Render a Shipping Label compoennt if all steps are done.
 */
import React from 'react';
import Wizard from '../../core/components/wizard'
import ShippingLabel from '../shipping-label';
import { steps } from '../../utilities/const';
import { shippingData } from '../../utilities/utils';

class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingData: {},
      renderShippingLabel: false
    };
  }

  onComplete = () => {
    this.setState({
      shippingData: shippingData.data,
      renderShippingLabel: true
    });
  }
  render() {
    return !this.state.renderShippingLabel ? (
      <Wizard
        steps={steps}
        onComplete={this.onComplete}
      /> 
    ) : <ShippingLabel shippingData={this.state.shippingData} />
  }
}
export default ShippingLabelMaker;
