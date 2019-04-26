import React from 'react';

class ShippingProgress extends React.Component {
    calcProgress(stepProgress) {
        return stepProgress === 1 ? 10 : stepProgress * 20;
    }
    render() {
        return (
            <div className="progress mt-3 mb-3">
                <div className="progress-bar" role="progressbar" style={{width: this.calcProgress(this.props.stepProgress) + '%'}} aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
        );
    }
}
export default ShippingProgress;
