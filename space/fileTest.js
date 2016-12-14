/* rpl */
var scope = 'top';

var f1 = function() {
	console.log(scope);
};

f1();

var f2 = function() {
	var scope = 'f2';
	f1();
};

f2();

var f3 = function() {
	var scope = 'f3';
	(function() {
		console.log(scope);
	})();
};

f3();