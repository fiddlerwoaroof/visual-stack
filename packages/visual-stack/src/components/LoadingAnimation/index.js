import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const LoadingAnimation = ({ loadingMessage = 'Loading...', restProps }) => (
  <div className="loading-animation loading-container" {...restProps}>
    <div className="loading-animation loading-bars">
      <div />
      <div />
      <div />
    </div>
    <div className="loading-animation loading-text">{loadingMessage}</div>
  </div>
);

LoadingAnimation.propTypes = {
  loadingMessage: PropTypes.string,
};

export default LoadingAnimation;
