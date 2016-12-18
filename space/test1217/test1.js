var status = "ready";
var select = function(callback) {
	if(status === "ready") {
		status = "pending";
		db.select("SQL", function(results) {
			status = "ready";
			callback(results);
		});
	}
};

var proxy = new events.EventEmitter();
var status = "ready";
var select = function(callback) {
	proxy.once("selected", callback);
	if(status === "ready" {
		status = "pending";
		db.select("SQL", function(results) {
			status = "ready";
			proxy.emit("selected", results);
		});
	})
};



/*util工具的继承方法*/
var Promise = function() {
	EventEmitter.call(this);
};
util.inherits(Promise, EventEmitter);



