import React from 'react';

class ShippingLabelStep3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            error: true,
            errorObj: {}
        }
    }
    componentDidMount() {
        console.log('Component did mount step3: ');
        this.props.getShippingData(this.state.weight, 'weight');
        if(this.props.setShippingData && this.props.setShippingData.weight) {
            const { weight } = this.props.setShippingData;
            this.setState({
                weight,
                error: false,
                errorObj: {}
            }, () => {
                this.validateFormFields();
                this.props.getShippingData(this.state.weight, 'weight');
            });
        }
    }
    setWeightMetadata = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.validateFormFields();
            this.props.getShippingData(this.state.weight, 'weight');
        });
    }
    validateFormFields = () => {
        if(!this.state.weight) {
            this.setState({
                error: true,
            });
        }
        else {
            this.setState({
                error: false,
            });
        }
    }
    renderError = (errormsg) => {
        return (<span>{errormsg}</span>);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Enter the Package Weight: </h2>
                <label>Weight: </label>
                <input name='weight'
                    type='number'
                    placeholder='Enter Weight'
                    onChange={this.setWeightMetadata}
                    value={this.state.weight}
                />
                {this.state.error && this.renderError('Enter proper weight !')}
            </React.Fragment>
        );
    }
}
export default ShippingLabelStep3;
