import React from 'react';
import Wizard from '../../core/components/wizard'
import ShippingLabel from '../shipping-label';
class ShippingLabelMaker extends React.Component {
    constructor(props) {
        super(props);
        this.steps = [1,2,3,4,5];
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
            <h2>Shipping Label Maker</h2>
        );
    }
    render() {
        console.log('in render shipping label maker: ', this.state.shippingData);
        return !this.state.renderShippingLabel ? (
            <Wizard
                header={this.header}
                steps={this.steps}
                onComplete={this.onComplete}
            /> 
        ) : <ShippingLabel shippingData={this.state.shippingData} />
    }
}
export default ShippingLabelMaker;
