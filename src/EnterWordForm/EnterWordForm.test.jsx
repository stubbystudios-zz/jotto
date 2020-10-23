import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import EnterWordForm from './EnterWordForm';
import { setUserSecretWord } from '../actions/actions';

const defaultProps = { formAction: () => { } };

/**
 * Factory function to create a ShallowWrapper for the EnterWordForm component.
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordForm {...setupProps} />);
}

describe('render EnterWordForm', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-enter-word-form');
    expect(component.length).toBe(1);
  });

  test('renders instructions', () => {
    const wrapper = setup();
    const instructions = findByTestAttr(wrapper, 'enter-word-instructions');
    expect(instructions.length).toBe(1);
  });

  test('renders submit button', () => {
    const wrapper = setup();
    const submit = findByTestAttr(wrapper, 'submit-button');
    expect(submit.length).toBe(1);
  });

  test('renders input box', () => {
    const wrapper = setup();
    const input = findByTestAttr(wrapper, 'enter-word-input');
    expect(input.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { formAction: () => { } };
    checkProps(EnterWordForm, expectedProps);
  });
});

describe('submit click action', () => {
  let setUserSecretWordMock;
  let wrapper;
  const userSecretWord = 'lunch';

  beforeEach(() => {
    // Create a mock function for `setUserSecretWord`
    setUserSecretWordMock = jest.fn();
    wrapper = setup({ formAction: setUserSecretWordMock });

    wrapper.instance().inputBox.current = { value: userSecretWord };

    const submit = findByTestAttr(wrapper, 'submit-button');
    submit.simulate('click', { preventDefault() { } });
  });

  test('`setUserSecretWord` was called once', () => {
    const setUserSecretWordCallCount = setUserSecretWordMock.mock.calls.length;
    expect(setUserSecretWordCallCount).toBe(1);
  });

  test('`setUserSecretWord` was called with input value as argument', () => {
    const userSecretWordArg = setUserSecretWordMock.mock.calls[0][0];
    expect(userSecretWordArg).toBe(userSecretWord);
  });
});