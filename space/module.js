// var name;

// exports.setName = function(thyName) {
// 	name = thyName;
// };

// exports.sayHello = function() {
// 	console.log('hello '+name);
// };


function Hello() {
	var name;

	this.setName = function(thyName) {
		name = thyName;
	};
	this.sayHello = function() {
		console.log('hello '+name);
	};
};

module.exports = Hello;