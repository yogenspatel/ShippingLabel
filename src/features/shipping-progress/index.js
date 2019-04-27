import React from 'react';
import PropTypes from 'prop-types';

class ShippingProgress extends React.Component {
  calcProgress = (stepProgress) => stepProgress === 1 ? 10 : stepProgress * 20

  render() {
    return (
      <div className="progress mt-3 mb-3">
        <div className="progress-bar" role="progressbar" style={{ width: `${this.calcProgress(this.props.stepProgress)  }%` }} aria-valuemin="0" aria-valuemax="100" />
      </div> 
    );
  }
}

ShippingProgress.propTypes = {
  stepProgress: PropTypes.number
}

ShippingProgress.defaultProps = {
  stepProgress: 1
}

export default ShippingProgress;
