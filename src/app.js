
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/test', (req, res) => {
	res.send('test')
})

app.get('ping', (req, res) => {
	res.send('pong')
})

app.listen(port, () => {
	console.log('running')
})
