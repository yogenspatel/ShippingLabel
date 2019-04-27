import React from 'react';
import PropTypes from 'prop-types';
import ShippingProgress from '../../../features/shipping-progress';
import Step1 from '../../../features/shipping-label-maker/step1';
import Step2 from '../../../features/shipping-label-maker/step2';
import Step3 from '../../../features/shipping-label-maker/step3';
import Step4 from '../../../features/shipping-label-maker/step4';
import Step5 from '../../../features/shipping-label-maker/step5';
import { shippingData } from '../../../features/utilities/utils'

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      totalSteps: this.props.steps.length,
      shippingData: {}
    }
    this.error = false;
  }

    prevClick = () => {
      if (this.state.step !== 1) {
        this.setState({
          step: this.state.step - 1
        });
      }
    }

    nextClick = () => {
      if (!this.error && this.state.step < this.state.totalSteps) {
        this.setState({
          step: this.state.step + 1
        });
      }
      if (this.props.steps.length === this.state.step) {
        shippingData.data = this.state.shippingData;
        this.props.onComplete();
      }
    }

    getWizardContext = (data, from) => {
      if (!data || Object.keys(data.errorObj) > 0) {
        this.error = true;
      } else {
        let dataObj = data;
        this.error = false;
        // dataObj[from] = data;
        // return { ...state, paginated_data: payload, noOfItems, pageSize, searchData };
        dataObj = { ...this.state.shippingData, [from]: data };
        this.setState({
          shippingData: dataObj
        });
      }
    }

    render() {
      return (
        <div className="container">
          <ShippingProgress stepProgress={this.state.step} />
          {this.state.step === 1 && <Step1 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
          {this.state.step === 2 && <Step2 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
          {this.state.step === 3 && <Step3 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
          {this.state.step === 4 && <Step4 getShippingData={this.getWizardContext} setShippingData={this.state.shippingData} />}
          {this.state.step === 5 && <Step5 setShippingData={this.state.shippingData} />}
          <div className="card text-center">
            <div className="card-footer">
              <button className="btn btn-primary mr-5" onClick={this.prevClick}><span className="h4">Prev</span></button>
              <button className="btn btn-primary" onClick={this.nextClick}>{this.props.steps.length === this.state.step ? <span className="h4">Confirm</span> : <span className="h4">Next</span>}</button>
            </div>
          </div>
        </div>
      );
    }
}

Wizard.propTypes = {
  steps: PropTypes.array,
  onComplete: PropTypes.func
}

Wizard.defaultProps = {
  steps: [],
  onComplete: () => {}
}

export default Wizard;
