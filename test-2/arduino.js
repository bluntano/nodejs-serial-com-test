// for serial communication
const SerialPort = require('serialport');
const port = new SerialPort('COM3', { baudRate: 9600 });

// for web server
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/on/', function(req, res) {
	try {
		port.write('1\n');
	} catch (err) {
		console.log("Error occured on write: " + err);
	};
	res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/off/', function(req, res) {
	try {
		port.write('0\n');
	} catch (err) {
		console.log("Error occured on write: " + err);
	};
	res.sendFile(path.join(__dirname + '/index.html'));
});

var webport = 4269;

app.use('/', router);
app.listen(webport);
console.log('Listening at: http://localhost:' + webport);