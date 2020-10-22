import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for count of total guesses.
 * @param {object} props = React props.
 * @returns {JSX.Element} = Rendered component.
 */
const TotalGuesses = (props) => {
  return (
    <p data-test='component-total-guesses'>
      Total guesses: {props.guessCount}
    </p>
  );
}

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired,
}

export default TotalGuesses;