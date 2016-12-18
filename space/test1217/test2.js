
/* 下面两段代码的区别，疑问 */
// var foo = function() {
// 	var local = "part";
// 	(function () {
// 		console.log(local);
// 	})();
// };

// var foo2 = function() {
// 	var local = "part";
// 	(function () {
// 		console.log(local);
// 	}());
// };

// foo();
// foo2();


/* 查看进程的内存占用 start */
var showMem = function() {
	var mem = process.memoryUsage();
	var format = function(bytes) {
		return (bytes/1024/1024).toFixed(2)+' MB';
	};
	console.log(
		'Process: heapTotal ' + format(mem.heapTotal)
		+ ' heapUsed ' + format(mem.heapUsed)
		+ ' rss ' + format(mem.rss)
	);
	console.log('-------------------------------');
}
// rss resident set size

// var useMem = function() {
// 	var size = 20*1024*1024;
// 	var arr = new Array(size);
// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i]
// 	}
// 	return arr;
// };
var useMem = function() {
	var size = 20*1024*1024;
	var buffer = new Buffer(size);
	for (var i = 0; i < size; i++) {
		buffer[i] = 0;
	}
	return buffer;
};

var total = [];
for (var j = 0; j < 15; j++) {
	showMem();
	total.push(useMem());
}
showMem();

/* 查看进程的内存占用 end */

