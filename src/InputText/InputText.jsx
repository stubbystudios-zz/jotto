import React from 'react';
import PropTypes from 'prop-types';

import './InputText.scss';
import TotalGuesses from '../TotalGuesses/TotalGuesses';

const InputText = (props) => {
  const guessInstructions = (
    props.guessedWords.length === 0
      ? <p
        data-test='guess-instructions'
        className='guess-instructions'
      >Try to guess the secret word!</p>
      : <div className='failed-guess'>
        <TotalGuesses guessCount={props.guessedWords.length} />
      </div>);
  return (
    <div className='input-text-wrapper'>
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