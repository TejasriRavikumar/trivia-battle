import { useState } from 'react';

function Home({ onStart, onLeaderboard }) {
  const [name, setName] = useState('');

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎯 Trivia Battle</h1>
      <p style={styles.subtitle}>Test your knowledge!</p>
      <input
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        style={styles.button}
        onClick={() => name.trim() && onStart(name)}
      >
        Start Game
      </button>
      <button
        style={{ ...styles.button, background: '#6c757d' }}
        onClick={onLeaderboard}
      >
        Leaderboard
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' },
  title: { fontSize: '3rem', marginBottom: '8px' },
  subtitle: { color: '#666', marginBottom: '32px' },
  input: { display: 'block', margin: '0 auto 16px', padding: '12px 20px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc', width: '260px' },
  button: { display: 'block', margin: '0 auto 12px', padding: '12px 40px', fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '200px' },
};

export default Home;