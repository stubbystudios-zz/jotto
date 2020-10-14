import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './actions';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // Testing both the action creator and the reducer
  test('add response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord())
      // Wait to return run the callback until the promise is resolved.
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      });
  });
});