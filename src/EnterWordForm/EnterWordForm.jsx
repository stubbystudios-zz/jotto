import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EnterWordForm.scss';

export class EnterWordForm extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e) {
    e.preventDefault();

    // Don't submit an empty word.
    if (this.inputBox.current.value.length > 0) {
      this.props.formAction(this.inputBox.current.value);
    }
  }

  render() {
    return (
      <section
        data-test='component-enter-word-form'
        className='component-enter-word-form'>
        <p data-test='enter-word-instructions'>
          Enter a secret word for someone else to guess!
        </p>
        <form className='form-inline'>
          <input
            data-test='enter-word-input'
            ref={this.inputBox}
            className='enter-word-input'
            type='text'
            placeholder='enter secret word' />
          <button
            data-test='submit-button'
            onClick={this.submitForm}
            className='submit-button'
            type='submit'>
            Submit
          </button>
        </form>
      </section>
    );
  }
}

EnterWordForm.propTypes = {
  formAction: PropTypes.func,
}

export default EnterWordForm;