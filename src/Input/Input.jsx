import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Input.scss';
import { guessWord, giveUp } from '../actions/actions';

export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    // Initialize state
    this.inputBox = React.createRef();

    // Bind this
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
    this.giveUpOnClick = this.giveUpOnClick.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }

    this.inputBox.current.value = '';
  }

  giveUpOnClick(e) {
    e.preventDefault();
    this.props.giveUp();
  }

  render() {
    const contents = this.props.success || this.props.gaveUp
      ? null
      : (
        <form className='guess-form'>
          <input
            data-test='input-box'
            ref={this.inputBox}
            className='input-box'
            id='word-guess'
            type='text'
            placeholder='enter guess'
          />
          <button
            data-test='submit-button'
            onClick={this.submitGuessedWord}
            className='submit-button'
            type='submit'>
            Submit
          </button>
          <button
            data-test='give-up-button'
            onClick={this.giveUpOnClick}
            className='give-up-button'>
            Give up
          </button>
        </form>
      );
    return (
      <section data-test='component-input' className='component-input'>
        {contents}
      </section>
    )
  }
}

const mapStateToProps = ({ success, gaveUp }) => {
  return { success, gaveUp };
}

export default connect(mapStateToProps, { guessWord, giveUp })(UnconnectedInput);