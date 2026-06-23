import { useEffect, useState } from 'react';
import { getLeaderboard } from './api';

function Leaderboard({ onHome }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getLeaderboard().then(res => setScores(res.data));
  }, []);

  return (
    <div style={styles.container}>
      <h2>🏆 Leaderboard</h2>
      {scores.length === 0 && <p>No scores yet. Be the first!</p>}
      {scores.map((s, i) => (
        <div key={s.id} style={styles.row}>
          <span style={styles.rank}>#{i + 1}</span>
          <span style={styles.name}>{s.player_name}</span>
          <span style={styles.score}>{s.score} pts</span>
        </div>
      ))}
      <button style={styles.button} onClick={onHome}>Back to Home</button>
    </div>
  );
}

const styles = {
  container: { maxWidth: '500px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' },
  row: { display: 'flex', alignItems: 'center', padding: '12px 16px', marginBottom: '8px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' },
  rank: { fontWeight: 'bold', width: '40px', color: '#4f46e5' },
  name: { flex: 1 },
  score: { fontWeight: 'bold' },
  button: { display: 'block', margin: '24px auto 0', padding: '12px 40px', fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' },
};

export default Leaderboard;