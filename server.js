const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/404.html'))
})

app.listen(3000, () => console.log('App Started'))