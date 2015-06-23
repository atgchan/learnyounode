var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
	if (err) throw err;
	var str = data.toString();
	var str_split = str.split('\n');
	console.log(str_split.length - 1);
});