require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const githubData = {
    name: 'Khizar Hayat',
    username: 'khizarhayat12',
    email: 'khizarhayt@gmail.com',
    age: 21,
    country: 'Pakistan',
    profession: 'Software Engineer'
};

app.get('/', (request, response) => {
    response.send('Hello Khizar!');
});

app.get('/gitData', (request, response) => {
    response.json(githubData);
});

app.get('/twitter', (request, response) => {
    response.send('khizarhayat12');
});

app.get('/login', (request, response) => {
    response.send('<h1>Please Login to Chai Aur Code</h1>');
});

app.get('/signup', (request, response) => {
    response.send('<h2>Please Sign In to your Account</h2>');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});