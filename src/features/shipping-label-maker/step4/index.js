import React from 'react';

class ShippingLabelStep4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipping_option: 1,
            error: true,
            errorObj: {}
        }
    }
    componentDidMount() {
        console.log('Component did mount step4: ');
        this.props.getShippingData(this.state.shipping_option, 'shipping_option');
        if(this.props.setShippingData && this.props.setShippingData.shipping_option) {
            const { shipping_option } = this.props.setShippingData;
            this.setState({
                shipping_option
            }, () => {
                this.props.getShippingData(this.state.shipping_option, 'shipping_option');
            });
        }
    }
    setShippingOptionMetadata = (e) => {
        console.log("setShippingOptionMetadata: ", e.currentTarget.value);
        this.setState({
            shipping_option: parseInt(e.currentTarget.value)
        }, () => {
            this.props.getShippingData(this.state.shipping_option, 'shipping_option');
        });
    }
    render() {
        return (
            <React.Fragment>
                <h2>Select the Shipping Option: </h2>
                <input type="radio" value="1" name="shipping_option_1" onChange={this.setShippingOptionMetadata} checked={this.state.shipping_option === 1} />{' '}Ground
                <input type="radio" value="2" name="shipping_option_2" onChange={this.setShippingOptionMetadata} checked={this.state.shipping_option === 2} />{' '}Priority
            </React.Fragment>
        );
    }
}
export default ShippingLabelStep4;
