import React from 'react';
import { validateFormFields, RenderFormField, setMetadata } from '../../utilities/utils';

class ShippingLabelStep3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            errorObj: {}
        }
        this.key = 'weight';
    }
    componentDidMount() {
        console.log('Component did mount step3: ', this.props.setShippingData);
        this.props.getShippingData(this.state, this.key);
        if(this.props.setShippingData && this.props.setShippingData[this.key]) {
            const { weight } = this.props.setShippingData[this.key];
            this.setState({
                weight,
                errorObj: {}
            }, () => {
                validateFormFields(this.state[this.key], this).then(() => (this.props.getShippingData(this.state, this.key)))
            });
        }
    }
    render() {
        return (
            <React.Fragment>
                <h2>Enter the Package Weight: </h2>
                <RenderFormField
                    fieldName='weight'
                    type='number'
                    placeHolder='Enter Weight'
                    onChange={(e) => setMetadata({e: e, context: this, key: this.key})}
                    context={this}
                />
            </React.Fragment>
        );
    }
}
export default ShippingLabelStep3;
