import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';
import secretWordReducer from './reducers/secretWordReducer';
import { resetGame } from './actions/actions';

/**
 * @function setup
 * @param {object} state - State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux properties', () => {
  let wrapper;
  const success = false;
  const gaveUp = false;
  const secretWord = 'party';
  const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];

  beforeEach(() => {
    wrapper = setup({
      success,
      gaveUp,
      secretWord,
      guessedWords,
    });
  })

  test('has access to `success` state', () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('has access to `gaveUp` state', () => {
    const gaveUpProp = wrapper.instance().props.gaveUp;
    expect(gaveUpProp).toBe(gaveUp);
  });

  test('has access to `secretWord` state', () => {
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test('has access to `guessedWords` state', () => {
    const guessedWordProp = wrapper.instance().props.guessedWords;
    expect(guessedWordProp).toBe(guessedWords);
  });

  test('`getSecretWord` action creator is a function on the props', () => {
    const resetGameProp = wrapper.instance().props.resetGame;
    expect(resetGameProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    gaveUp: false,
    secretWord: 'party',
    guessedWords: [],
  }

  // Set up App component with getSecretWordMock as the getSecretWord prop.
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // Run lifecycle method
  wrapper.instance().componentDidMount();

  // Check to see if the mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});