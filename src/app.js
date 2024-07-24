
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/test', (req, res) => {
	res.send('test')
})

app.listen(port, () => {
	console.log('running')
})
