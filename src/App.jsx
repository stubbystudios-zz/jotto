import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
import Input from './Input/Input';
import NewWordButton from './NewWordButton/NewWordButton';

import {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering
} from './actions/actions';
import EnterWordButton from './EnterWordButton/EnterWordButton';
import EnterWordForm from './EnterWordForm/EnterWordForm';

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
    let contents;
    if (this.props.userEnter === 'inProgress') {
      contents = (
        <EnterWordForm formAction={this.props.setUserSecretWord} />
      );
    } else {
      contents = (
        <div>
          <Congrats success={this.props.success} />
          <NewWordButton display={this.props.success || this.props.gaveUp}
            resetAction={this.props.resetGame} />
          {/* <InputText guessedWords={this.props.guessedWords} /> */}
          <Input />
          <GuessedWords guessedWords={this.props.guessedWords} />
          <EnterWordButton display={this.props.guessedWords.length === 0}
            buttonAction={this.props.setUserEntering} />
        </div>
      );
    }
    return (
      <div className='App'>
        <div className='container'>
          <header className='app-header'>
            <h1>Jotto Word Game</h1>
            <p>{this.props.secretWord}</p>
          </header>
          {contents}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord, gaveUp, userEnter }) => {
  return { success, guessedWords, secretWord, gaveUp, userEnter };
}

const actions = {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering,
}

export default connect(mapStateToProps, actions)(UnconnectedApp);
