var mymodule = require('./mymodule.js');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, data) {
	if (err){
		console.error(err);
		return;
	}
	data.forEach(function (list) {
		console.log(list);
	});
});