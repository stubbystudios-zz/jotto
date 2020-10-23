import { actionTypes } from '../actions/actions';

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - Action to be reduced.
 * @returns {array} - New guessedWords state.
 */

// If no words guessed, default is an empty array
export default (state = [], action) => {
  switch (action.type) {
    // If we receive guessWord action, update state
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    case (actionTypes.RESET_GAME):
      return [];
    default:
      return state;
  }
}