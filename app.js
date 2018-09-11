// TDD -  test driven development
// Дизайн кода определяется тестами

// import  Person  from './person';
var Person = require('./person');
var express = require('express');
	app = express();

app.get('/', function (req, res) {
  res.send(Person.greeting());
});

app.listen(process.env.PORT || 8080, function(){
	console.log('http://localhost:8080');
});






