const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const words = [
    { word: "javascript", hint: "A popular programming language for web development" },
    { word: "nodejs", hint: "A JavaScript runtime built on Chrome's V8 engine" },
    { word: "react", hint: "A JavaScript library for building user interfaces" },
    { word: "hangman", hint: "A classic word-guessing game" },
    { word: "express", hint: "A minimal and flexible Node.js web application framework" }
];

app.get('/word', (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json(randomWord);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
