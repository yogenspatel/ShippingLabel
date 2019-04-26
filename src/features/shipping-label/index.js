import React from 'react';
import { calculateShippingCost } from '../utilities/utils';

class ShippingLabel extends React.Component {
    renderFrom() {
        const { from } = this.props.shippingData;
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
        const { to } = this.props.shippingData;
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
        const { shipping_option } = this.props.shippingData;
        return shipping_option ? 
        <div className='card'>
            <div className='card-header'>
                Shipping Option: {shipping_option.shipping_option === 1 ?
                    'Ground' : 'Priority'}
            </div>
        </div> : null;
    }
    renderWeight() {
        const { weight } = this.props.shippingData;
        return weight ? 
        <div className='card'>
            <div className='card-header'>
                Package Weight: {weight.weight}
            </div>
        </div> : null;
    } 
    renderShippingCost() {
        const { weight, shipping_option } = this.props.shippingData;
        if(weight && shipping_option) {
            const shippingCost = calculateShippingCost(weight.weight, shipping_option.shipping_option);
            return <div className='card'>
                <div className='card-header'>Shipping Cost: ${shippingCost}</div>
                </div>;
        }
        return null;
    }
    render() {
        console.log('Shiping Label: ', this.props.shippingData);
        return this.props.shippingData ? (
            <div className='card'>
                <div className='card-header'>Shipping Label</div>
                <div className='card-body'>
                    <button className='btn btn-primary mb-3' onClick={() => window.print()}>Print this Label</button>
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
export default ShippingLabel;
