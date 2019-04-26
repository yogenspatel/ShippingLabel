import React from 'react';
import ShippingProgress from '../../../features/shipping-progress';
import Step1 from '../../../features/shipping-label-maker/step1';
import Step2 from '../../../features/shipping-label-maker/step2';
import Step3 from '../../../features/shipping-label-maker/step3';
import Step4 from '../../../features/shipping-label-maker/step4';
import Step5 from '../../../features/shipping-label-maker/step5';

class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            totalSteps: 5,
            shippingData: {},
            error: false
        }
    }
    prevClick = () => {
        console.log('Prev Clicked');
        if(!this.state.error && this.state.step !== 1) {
            this.setState({
                step: this.state.step - 1
            });
        }
    }
    nextClick = () => {
        console.log('next Clicked');
        if(!this.state.error && this.state.step < this.state.totalSteps) {
            this.setState({
                step: this.state.step + 1
            });
        }
        if(this.props.steps.length === this.state.step) {
            this.props.onComplete();
        }
    }
    getWizardContext = (data, from) => {
        // console.log('Get Shipping Data: ', data);
        if(data.error) {
            this.setState({
                error: true
            });
        }
        else {
            let dataObj = data;
            // dataObj[from] = data;
            // return { ...state, paginated_data: payload, noOfItems, pageSize, searchData };
            dataObj = {...this.state.shippingData, [from]: data};
            this.setState({
                shippingData: dataObj,
                error: false
            }, () => {
                console.log('Shipping Data in state: ', this.state.shippingData);
            });
        }
    }
    render() {
        return(
            <React.Fragment>
                {this.props.header()}
                <ShippingProgress stepProgress={this.state.step} />
                {this.state.step === 1 && <Step1 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
                {this.state.step === 2 && <Step2 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
                {this.state.step === 3 && <Step3 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
                {this.state.step === 4 && <Step4 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
                {this.state.step === 5 && <Step5 setShippingData={this.state.shippingData} />}
                <button onClick={this.prevClick}>Prev</button>
                <button onClick={this.nextClick}>{this.props.steps.length === this.state.step ? "Confirm" : "Next"}</button>
            </React.Fragment>
        );
    }
}
export default Wizard;
