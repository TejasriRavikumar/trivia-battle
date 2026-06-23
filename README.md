# 🎯 Trivia Battle

A full-stack trivia quiz web application built with React, Node.js, Express, and PostgreSQL.

## Features
- 260+ questions across 13 categories
- Randomly shuffled questions every game
- Persistent leaderboard stored in PostgreSQL
- Clean multi-screen React UI

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Other:** REST API, Axios, CORS

## Database Schema
- `categories` — stores category names
- `questions` — stores questions with 4 options and correct answer
- `scores` — stores player name, score and timestamp

## API Routes

|
 Method 
|
 Route 
|
 Description 
|
|
--------
|
-------
|
-------------
|
|
 GET 
|
 /questions 
|
 Fetch 10 random shuffled questions 
|
|
 POST 
|
 /scores 
|
 Save player score 
|
|
 GET 
|
 /leaderboard 
|
 Get top 10 scores 
|

## How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Environment Variables
Create a `.env` file in the backend folder:
```
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=trivia_battle
PORT=3001
```
