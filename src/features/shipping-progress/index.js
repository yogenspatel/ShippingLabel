import React from 'react';

class ShippingProgress extends React.Component {
    render() {
        return (
            <h2>Shipping Progress: Current Step: {this.props.stepProgress}</h2>
        );
    }
}
export default ShippingProgress;
