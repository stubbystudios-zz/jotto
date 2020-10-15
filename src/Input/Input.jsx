import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Input.scss';
import { guessWord } from '../actions/actions';

export class UnconnectedInput extends Component {
  render() {
    const label = (
      <p
        data-test='guess-instructions'
        className='guess-instructions'
      >
        Try to guess the secret word!
      </p>
    );
    const contents = this.props.success
      ? null : (
        <form className='guess-form'>
          <input
            data-test='input-box'
            className='input-box'
            type='text'
            placeholder='enter guess'
          />
          <button
            data-test='submit-button'
            className='submit-button'
            onClick={() => this.props.guessWord('train')}
            type='submit'
          >
            Submit
          </button>
        </form>
      )
    return (
      <section data-test='component-input' className='component-input'>
        {label}
        {contents}
      </section>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);