import React, { Component } from 'react';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Congrats success={true} />
          <GuessedWords guessedWords={[]} />
        </div>
      </div>
    );
  }
}

export default App;
