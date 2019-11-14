const http = require('http');

const express = require('express');
const app = express()

const route = require('./router');

const data = require('./data/index')

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	route(req, res)
	//res.write('./router')
	// Route System
	// ¿?
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));