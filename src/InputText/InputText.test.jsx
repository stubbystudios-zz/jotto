import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import InputText from './InputText';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the InputText component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<InputText {...setupProps} />)
};

test('does not throw warning with expected props', () => {
  checkProps(defaultProps);
});

test('renders instructions to guess a word', () => {
  let wrapper = setup({ guessedWords: [] });
  const instructions = findByTestAttr(wrapper, 'guess-instructions');
  expect(instructions.text().length).not.toBe(0);
});