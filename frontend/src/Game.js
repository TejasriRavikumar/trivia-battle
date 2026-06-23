import { useState, useEffect } from 'react';
import { getQuestions, saveScore } from './api';

function Game({ playerName, onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestions().then(res => {
      setQuestions(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div style={styles.center}>Loading questions...</div>;

  const q = questions[current];
  const options = [
    { label: 'A', text: q.option_a },
    { label: 'B', text: q.option_b },
    { label: 'C', text: q.option_c },
    { label: 'D', text: q.option_d },
  ];

  const handleAnswer = (label) => {
    if (selected) return;
    setSelected(label);
    const newScore = label === q.correct_option ? score + 1 : score;
    if (label === q.correct_option) setScore(newScore);

    setTimeout(async () => {
      if (current + 1 >= questions.length) {
        await saveScore(playerName, newScore);
        onFinish(newScore);
      } else {
        setCurrent(current + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const getColor = (label) => {
    if (!selected) return '#fff';
    if (label === q.correct_option) return '#d4edda';
    if (label === selected) return '#f8d7da';
    return '#fff';
  };

  return (
    <div style={styles.container}>
      <p style={styles.progress}>Question {current + 1} of {questions.length}</p>
      <p style={styles.score}>Score: {score}</p>
      <div style={styles.card}>
        <p style={styles.question}>{q.question_text}</p>
        {options.map(opt => (
          <button
            key={opt.label}
            style={{ ...styles.option, background: getColor(opt.label) }}
            onClick={() => handleAnswer(opt.label)}
          >
            <strong>{opt.label}.</strong> {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  center: { textAlign: 'center', padding: '60px', fontFamily: 'sans-serif' },
  container: { maxWidth: '600px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' },
  progress: { color: '#666', marginBottom: '4px' },
  score: { fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '24px' },
  card: { background: '#f9f9f9', borderRadius: '12px', padding: '32px' },
  question: { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '24px' },
  option: { display: 'block', width: '100%', padding: '12px 16px', marginBottom: '12px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', textAlign: 'left', transition: 'background 0.3s' },
};

export default Game;