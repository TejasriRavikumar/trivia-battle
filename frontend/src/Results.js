function Results({ score, playerName, onPlayAgain, onLeaderboard, onHome }) {
  return (
    <div style={styles.container}>
      <h2>Game Over, {playerName}!</h2>
      <p style={styles.score}>You scored <strong>{score}</strong> out of 10</p>
      <p style={styles.emoji}>{score >= 4 ? '🏆' : score >= 2 ? '👍' : '😅'}</p>
      <button style={styles.button} onClick={onPlayAgain}>Play Again</button>
      <button style={{ ...styles.button, background: '#6c757d' }} onClick={onLeaderboard}>Leaderboard</button>
      <button style={{ ...styles.button, background: '#aaa' }} onClick={onHome}>Home</button>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' },
  score: { fontSize: '1.3rem', margin: '16px 0' },
  emoji: { fontSize: '4rem', margin: '16px 0 32px' },
  button: { display: 'block', margin: '0 auto 12px', padding: '12px 40px', fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '200px' },
};

export default Results;