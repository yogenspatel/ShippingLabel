import React from 'react';
import { calculateShippingCost } from '../../utilities/utils';
class ShippingLabelStep5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingData: {}
        };
    }
    componentDidMount() {
        const shippingData = this.props.setShippingData;
        this.setState({
            shippingData
        });
    }
    renderFrom() {
        const { from } = this.state.shippingData;
        return from ? (
            <React.Fragment>
                <h2>From: </h2>
                <p>Name: {from.name}</p>
                <p>Address: {from.street}</p>
                <p>City: {from.city}</p>
                <p>State: {from.state} zip: {from.zip}</p>
            </React.Fragment>
        ) : null;
    }
    renderTo() {
        const { to } = this.state.shippingData;
        return to ?(
            <React.Fragment>
                <h2>To: </h2>
                <p>Name: {to.name}</p>
                <p>Address: {to.street}</p>
                <p>City: {to.city}</p>
                <p>State: {to.state} zip: {to.zip}</p>
            </React.Fragment>
        ) : null;
    }
    renderShippingOption() {
        const { shipping_option } = this.state.shippingData;
        return shipping_option ? <div><h2>Shipping Option: </h2>{shipping_option.shipping_option === 1 ? 'Ground' : 'Priority'}</div> : null;
    }
    renderWeight() {
        console.log('in Weight: ', this.state.shippingData);
        const { weight } = this.state.shippingData;
        return weight ? <div><h2>Package Weight: </h2>{weight.weight}</div> : null;
    } 
    renderShippingCost() {
        const { weight, shipping_option } = this.state.shippingData;
        if(weight && shipping_option) {
            const shippingCost = calculateShippingCost(weight.weight, shipping_option.shipping_option);
            return <div><h2>Shipping Cost: </h2>${shippingCost}</div>;
        }
        return null;
    }
    render() {
        console.log('Step 5: ', this.state.shippingData);
        return this.state.shippingData ? (
            <div>
                <h2>Confirm</h2>
                {this.renderTo()}
                {this.renderFrom()}
                {this.renderWeight()}
                {this.renderShippingOption()}
                {this.renderShippingCost()}
            </div>
        ) : null;
    }
}
export default ShippingLabelStep5;
