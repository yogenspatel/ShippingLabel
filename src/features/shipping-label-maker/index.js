import React from 'react';
import Wizard from '../../core/components/wizard'
import ShippingLabel from '../shipping-label';
import { steps } from '../utilities/const';
class ShippingLabelMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingData: {},
            renderShippingLabel: false
        };
    }
    onComplete = (shippingData) => {
        console.log('on complete: ', shippingData);
        this.setState({
            shippingData,
            renderShippingLabel: true
        });
    }
    header = () => {
        return (
            <header className='navbar navbar-expand-lg navbar-dark bg-primary'><p className='navbar-brand'>Shipping Label Maker</p></header>
        );
    }
    render() {
        console.log('in render shipping label maker: ', this.state.shippingData);
        return !this.state.renderShippingLabel ? (
            <Wizard
                header={this.header}
                steps={steps}
                onComplete={this.onComplete}
            /> 
        ) : <ShippingLabel shippingData={this.state.shippingData} />
    }
}
export default ShippingLabelMaker;
