const express = require('express');
const app = express();

// Now attached to app we have a bunch of methods to 
// start our server and send responses to the client

//always takes two parameters - always request first and response second
app.get('/', (request, response) => {
	response.send('Hi Im the server')
});

app.get('/anthingWeWant', (request, response) => {
	response.send('Whatever we want')
})

app.get('/hellothere', (request, response) => {
	response.send('hi hello hey hiya')	
})

app.get('/taco', (request, response) => {
	response.send('taco')
})

app.listen(3000, () => {
	console.log('server is listening on Port 3000');
})