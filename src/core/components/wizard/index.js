/**
 * @type {Component}
 * Renders a wizard component for shipping label maker
 * {@property} - steps array
 * {@property} - onComplete function.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ShippingProgress from '../../../features/shipping-progress';
import Step1 from '../../../features/shipping-label-maker/step1';
import Step2 from '../../../features/shipping-label-maker/step2';
import Step3 from '../../../features/shipping-label-maker/step3';
import Step4 from '../../../features/shipping-label-maker/step4';
import Step5 from '../../../features/shipping-label-maker/step5';
import { shippingData } from '../../../utilities/utils'

class Wizard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 1, // current step
        totalSteps: this.props.steps.length, // Total no of Steps
        shippingData: {}, // Data object contains shipping information traversed through steps of shipping label maker form
        error: false // Represents error state
      }
    }

    /**
     * @type {function}
     * On Click of Prev button, decrement step in a state.
     */
    prevClick = () => {
      if (this.state.step !== 1) {
        this.setState({
          step: this.state.step - 1
        });
      }
    }

    /**
     * @type {function}
     * on Click of Next button, increments step in a state. 
     */
    nextClick = () => {
      /**
       * increments step in a state if
       *    there is no error and
       *    the current steps is not a last step
       * */
      if (!this.state.error && this.state.step < this.state.totalSteps) {
        this.setState({
          step: this.state.step + 1
        });
      }
      // Call onComplete if current step is a last step
      if (this.state.totalSteps === this.state.step) {
        shippingData.data = this.state.shippingData;
        this.props.onComplete();
      }
    }

    /**
     * @type {function}
     * Sets state with data if form data is validated otherwise set state with error
     * @param {object} data Form fields data object.
     * @param {string} key Defines a key to store data object into state
     */
    getWizardContext = (data, key) => {
      // If error object contains with any key (invalidated any form field), then set error state to true
      if (Object.keys(data.errorObj).length > 0) {
        this.setState({
          error: true
        });
      } else {
        // All form fields are validated, then store data in a state.
        let dataObj = data;
        dataObj = { ...this.state.shippingData, [key]: data };
        this.setState({
          shippingData: dataObj,
          error: false
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
              <button className="btn btn-primary mr-5 prev" onClick={this.prevClick}><span className="h4">Prev</span></button>
              <button className="btn btn-primary next" onClick={this.nextClick}>{this.props.steps.length === this.state.step ? <span className="h4">Confirm</span> : <span className="h4">Next</span>}</button>
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
