import React from 'react';
import PropTypes from 'prop-types';

const EnterWordButton = (props) => {
  if (props.display) {
    return (
      <button
        data-test='component-enter-word-button'
        className='component-enter-word-button'
        onClick={props.buttonAction}>
        Enter your own secret word
      </button>
    );
  } else {
    return (
      <div
        data-test='component-enter-word-button'
        className='component-enter-word-button'></div>
    );
  }
};

EnterWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  buttonAction: PropTypes.func,
};

export default EnterWordButton;