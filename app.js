const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	console.log(req)
	res.send("hello zain this is from my source code!")
})

app.get('/ping', (req, res) => {
	res.send('pong')
})

app.listen(port, () => {
	console.log('running')
})
