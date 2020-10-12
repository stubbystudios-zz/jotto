import React, { Component } from 'react';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Congrats success={true} />
          <GuessedWords guessedWords={[
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'party', letterMatchCount: 3 },
            { guessedWord: 'freak', letterMatchCount: 3 },
          ]} />
        </div>
      </div>
    );
  }
}

export default App;
