require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (request, response) => {
  response.send('Hello Khizar!')
})

app.get('/twitter', (request, response)=>{
    response.send('khizarhayat12')
})

app.get('/login', (request, response)=>{
    response.send('<h1>Please Login to Chai Aur Code</h1>')
})

app.get('/signup', (request, response)=>{
    response.send('<h2>Please Sign In to your Account</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 