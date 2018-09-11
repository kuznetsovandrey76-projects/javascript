// Module 
var Counter = (function() {
	var i = 0;

	return {
		add: function() {
			i++;
		},
		set: function (value) {
			i = value;
		},
		get: function() {
			console.log(i);
		}
	}

})();

Counter.get();





