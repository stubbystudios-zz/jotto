import { actionTypes } from '../actions/actions';
import guessedWordsReducer from './guessedWordsReducer';

test('returns state of `[]` upon receiving an action type `RESET_GAME`', () => {
  const initialState = [{ guessedWord: 'train', letterMatchCount: 3 }];
  const newState = guessedWordsReducer(initialState, { type: actionTypes.RESET_GAME });
  expect(newState).toEqual([]);
});