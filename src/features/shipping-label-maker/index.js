import React from 'react';
import Wizard from '../../core/components/wizard'

class ShippingLabelMaker extends React.Component {
    constructor(props) {
        super(props);
        this.steps = [1,2,3,4,5];
        this.wizardContext = {};
    }
    onComplete = () => {
        console.log('on complete: ', this.props.wizardContext);
    }
    header = () => {
        return (
            <h2>Shipping Label Maker</h2>
        );
    }
    render() {
        return (
            <Wizard
                header={this.header}
                steps={this.steps}
                wizardContext={this.wizardContext}
                onComplete={this.onComplete}
            />
        );
    }
}
export default ShippingLabelMaker;
