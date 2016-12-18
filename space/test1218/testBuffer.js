// var str = "深入浅出node.js";
// var buf = new Buffer(str, 'utf-8');
// console.log(buf, buf.length, buf[1]);

var pool = new Buffer(Buffer.poolSize);
console.log(pool.used);
