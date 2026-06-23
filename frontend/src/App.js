import { useState } from 'react';
import Home from './Home';
import Game from './Game';
import Results from './Results';
import Leaderboard from './Leaderboard';

function App() {
  const [screen, setScreen] = useState('home');
  const [playerName, setPlayerName] = useState('');
  const [finalScore, setFinalScore] = useState(0);

  return (
    <div>
      {screen === 'home' && (
        <Home
          onStart={(name) => { setPlayerName(name); setScreen('game'); }}
          onLeaderboard={() => setScreen('leaderboard')}
        />
      )}
      {screen === 'game' && (
        <Game
          playerName={playerName}
          onFinish={(score) => { setFinalScore(score); setScreen('results'); }}
        />
      )}
      {screen === 'results' && (
        <Results
          score={finalScore}
          playerName={playerName}
          onPlayAgain={() => setScreen('game')}
          onLeaderboard={() => setScreen('leaderboard')}
          onHome={() => setScreen('home')}
        />
      )}
      {screen === 'leaderboard' && (
        <Leaderboard onHome={() => setScreen('home')} />
      )}
    </div>
  );
}

export default App;