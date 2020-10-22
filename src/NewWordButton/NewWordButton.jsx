import React from 'react';
import PropTypes from 'prop-types';

/**
 * Function react component for the the reset button
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const NewWordButton = (props) => {
  if (props.display) {
    return (
      <button
        data-test='component-new-word-button'
        className='component-new-word-button'
        onClick={props.resetAction}
      >New word</button>
    );
  } else {
    return (
      <div data-test='component-new-word-button' />
    );
  }
};

NewWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func,
}

export default NewWordButton;