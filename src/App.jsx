import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSecretWord } from './actions/actions';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
import Input from './Input/Input';

export class UnconnectedApp extends Component {

  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // Get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Congrats success={this.props.success} />
          <Input />
          <GuessedWords guessedWords={this.props.guessedWords} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
