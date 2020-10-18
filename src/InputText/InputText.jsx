import React from 'react';
import PropTypes from 'prop-types';

const InputText = (props) => {
  const guessInstructions = (
    props.guessedWords.length === 0
      ? <p
        data-test='guess-instructions'
        className='guess-instructions'
      >
        Try to guess the secret word!</p>
      : '');
  return (
    <div className='label-wrapper'>
      {guessInstructions}
    </div>
  );
}

InputText.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default InputText;