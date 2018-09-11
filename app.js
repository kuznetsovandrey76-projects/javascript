// Module 
// var Counter = (function() {
// 	var i = 0;

// 	return {
// 		add: function() {
// 			i++;
// 		},
// 		set: function (value) {
// 			i = value;
// 		},
// 		get: function() {
// 			console.log(i);
// 		}
// 	}

// })();

// Counter.get();



// prototype / только с new
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.greeting = function(){
// 	return 'Hello ' + this.name; 
// };

// var andrey = new Person('Andrey', 28);
// var tom = new Person('Tom', 21);

// console.log(andrey.greeting())



// Factory Function
function createObject(value) {
	return {
		name: value,
		print: function() {
			console.log('print');
		}
	};
}
var obj1 = createObject('string');

// Constructor Function
function Create(value) {
	this.name = value;
	this.print = function() {
			console.log('print');		
	}
}
var obj2 = new Create('string');

console.log(obj1, obj2);






