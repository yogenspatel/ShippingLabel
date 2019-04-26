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
            <div className='col-sm-6'>
                <div className='card'>
                    <div className='card-header'>From:</div>
                    <div className='card-body'>
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
        const { to } = this.state.shippingData;
        return to ? (
            <div className='col-sm-6'>
                <div className='card'>
                    <div className='card-header'>To:</div>
                    <div className='card-body'>
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
        const { shipping_option } = this.state.shippingData;
        return shipping_option ? 
        <div className='card'>
            <div className='card-header'>
                Shipping Option: {shipping_option.shipping_option === 1 ?
                    'Ground' : 'Priority'}
            </div>
        </div> : null;
    }
    renderWeight() {
        const { weight } = this.state.shippingData;
        return weight ? 
        <div className='card'>
            <div className='card-header'>
                Package Weight: {weight.weight}
            </div>
        </div> : null;
    } 
    renderShippingCost() {
        const { weight, shipping_option } = this.state.shippingData;
        if(weight && shipping_option) {
            const shippingCost = calculateShippingCost(weight.weight, shipping_option.shipping_option);
            return <div className='card'>
                <div className='card-header'>Shipping Cost: ${shippingCost}</div>
                </div>;
        }
        return null;
    }
    render() {
        console.log('Step 5: ', this.state.shippingData);
        return this.state.shippingData ? (
            <div className='card'>
                <div className='card-header'>Confirm</div>
                <div className='card-body'>
                    <div className='row mb-3'>
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
export default ShippingLabelStep5;
