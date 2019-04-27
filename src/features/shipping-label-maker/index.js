import React from 'react';
import Wizard from '../../core/components/wizard'
import ShippingLabel from '../shipping-label';
import { steps } from '../utilities/const';
import { shippingData } from '../utilities/utils';

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


  renderHeader = () => (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary"><h1 className="h1 text-white m-auto">Shipping Label Maker</h1></header>
  )

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
