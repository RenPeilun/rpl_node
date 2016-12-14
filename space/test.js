function Foo() {

}

// Object.prototype.name = 'Rpl Object';
// Foo.prototype.name = 'Bar';

// var obj = new Object();
// var foo = new Foo();

// console.log(foo.__proto__);
// console.log(foo.prototype);
// console.log(Foo.prototype);
// console.log(Foo);
// console.log(Foo.__proto__);


var scope = "global";
function check(){
	var scope = "local";
	function f(){
		console.log(scope);
	}
	return f;
}
check()();