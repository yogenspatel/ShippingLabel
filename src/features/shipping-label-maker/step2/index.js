import React from 'react';

class ShippingLabelStep2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            error: true,
            errorObj: {}
        }
    }
    componentDidMount() {
        console.log('Component did mount step2: ');
        this.props.getShippingData(this.state, 'from');
        if(this.props.setShippingData && this.props.setShippingData.from) {
            const { name, street, city, state, zip } = this.props.setShippingData.from;
            this.setState({
                name, street, city, state, zip,
                error: false,
                errorObj: {}
            }, () => {
                this.validateFormFields();
                this.props.getShippingData(this.state, 'from');
            });
        }
    }
    setReceiverMetadata = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.validateFormFields();
            this.props.getShippingData(this.state, 'from');
        });
    }
    validateFormFields = () => {
        const stateValues = Object.values(this.state);
        const filteredStateValues = stateValues.filter((val) => val);

        if(stateValues.length !== filteredStateValues.length) {
            console.log('validateFormFields: if');
            let errorObj = {};
            stateValues.map((val, i) => val === '' ? errorObj[Object.keys(this.state)[i]] = true : null);
            this.setState({
                error: true,
                errorObj
            });
        }
        else {
            console.log('validateFormFields: else');
            this.setState({
                error: false,
                errorObj: {}
            });
        }
        // this.props.getShippingData(this.state, 'from');
    }
    renderError = (errormsg) => {
        return (<span>{errormsg}</span>);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Enter the Receiver's Address</h2>
                <label>Name: </label>
                <input name='name'
                    type='text'
                    placeholder='Enter Receiver Name'
                    onChange={this.setReceiverMetadata}
                    value={this.state.name}
                />
                {this.state.errorObj.name && this.renderError('Name is Required !')}
                <label>Street: </label>
                <input name='street'
                    type='text'
                    placeholder='Enter Street Address'
                    onChange={this.setReceiverMetadata}
                    value={this.state.street}
                />
                {this.state.errorObj.street && this.renderError('Street Address is Required !')}
                <label>City: </label>
                <input name='city'
                    type='text'
                    placeholder='Enter City'
                    onChange={this.setReceiverMetadata}
                    value={this.state.city}
                />
                {this.state.errorObj.city && this.renderError('City is Required !')}
                <label>State: </label>
                <input name='state'
                    type='text'
                    placeholder='Enter State'
                    onChange={this.setReceiverMetadata}
                    value={this.state.state}
                />
                {this.state.errorObj.state && this.renderError('State is Required !')}
                <label>Zip: </label>
                <input name='zip'
                    type='text'
                    placeholder='Enter Zip'
                    onChange={this.setReceiverMetadata}
                    value={this.state.zip}
                />
                {this.state.errorObj.zip && this.renderError('Zip is Required !')}
            </React.Fragment>
        );
    }
}
export default ShippingLabelStep2;
