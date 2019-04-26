import React from 'react';
import { validateFormFields, RenderFormField, setMetadata } from '../../utilities/utils';

class ShippingLabelStep1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '', 
            errorObj: {}
        }
        this.key = 'to';
    }
    componentDidMount() {
        this.props.getShippingData(this.state, this.key);
        if(this.props.setShippingData && this.props.setShippingData[this.key]) {
            const { name, street, city, state, zip } = this.props.setShippingData[this.key];
            this.setState({
                name, street, city, state, zip,
                errorObj: {}
            }, () => {
                validateFormFields(this.state, this).then(() => (this.props.getShippingData(this.state, this.key)))
            });
        }
    }
    
    renderFormFields = () => {
        const formFields = ['name', 'street', 'city', 'state', 'zip'];
        return formFields.map((fieldName, i) => (
            <RenderFormField
                key={`sender_${i}`}
                fieldName={fieldName}
                type='text'
                placeHolder={`Enter ${fieldName}`}
                onChange={(e) => setMetadata({e: e, context: this, key: this.key})}
                context={this}
            />
        ));
    }
    render() {
        return (
            <React.Fragment>
                <h2>Enter the Sender's Address</h2>
                {this.renderFormFields()}
            </React.Fragment>
        );
    }
}
export default ShippingLabelStep1;
