import { useState } from 'react';
import './App.css';
import Feedback from './feedback';
import GuessSection from './guess-session';
import Header from './header';

function App() {
  const [guesses, setGuesses] = useState([]);
  const [feedback, setFeedback] = useState('Make your first guess!');
  const [correctAnswer, setCorrectAnswer] = useState(Math.floor(Math.random() * 100) + 1);

  const restartGame = () => {
    setGuesses([]);
    setFeedback('Make your first guess!');
    setCorrectAnswer(Math.floor(Math.random() * 100) + 1);
  }

  const makeGuess = (guess) => {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      setFeedback('Please enter a valid number');
      return
    }
    const difference = Math.abs(guess - correctAnswer);
    let localFeedback;
    if (difference >= 50) {
      localFeedback = "You're ICE cold..."
    } else if (difference >= 30) {
      localFeedback = "You're pretty cold..."
    } else if (difference >= 10) {
      localFeedback = "You're getting warm..."
    } else if (difference >= 1) {
      localFeedback = "You're HOT!!"
    } else {
      localFeedback = "You guessed the correct answer!!"
    }
    setGuesses([...guesses], guess);
    setFeedback(localFeedback);
  }

  const guessCount = guesses.length;

  return (
    <div className="App">
      <Header onRestartGame={() => restartGame} />
      <main role='main'>
        <GuessSection 
          feedback={feedback} 
          guessCount={guessCount} 
          onMakeGuess={makeGuess}
        />
      </main>
    </div>
  );
}

export default App;
