var http = require('http');
var map = require('./node_modules/through2-map');

var toUpper = map(function(lower) {
	return lower.toString().toUpperCase();
});

var server = http.createServer(function (req, res) {
	if (req.method != 'POST'){
        return res.end('send me a POST\n');
	}

	if (req.method === 'POST') {
		req.pipe(toUpper).pipe(res);
	}
});
server.listen(process.argv[2]);