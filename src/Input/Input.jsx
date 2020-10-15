import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Input.scss';
import { guessWord } from '../actions/actions';

export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    // Initialize state
    this.state = { currentGuess: null }

    // Bind this for submitGuessedWord
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' })
    }
  }

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
      ? null
      : (
        <form className='guess-form'>
          <input
            data-test='input-box'
            className='input-box'
            type='text'
            value={this.state.currentGuess}
            onChange={(e) => this.setState({ currentGuess: e.target.value })}
            placeholder='enter guess'
          />
          <button
            data-test='submit-button'
            className='submit-button'
            type='submit'
            onClick={(e) => this.submitGuessedWord(e)}
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