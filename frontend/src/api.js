import axios from 'axios';

const API = 'http://localhost:3001';

export const getQuestions = () => axios.get(`${API}/questions`);
export const saveScore = (player_name, score) => axios.post(`${API}/scores`, { player_name, score });
export const getLeaderboard = () => axios.get(`${API}/leaderboard`);