var net = require('net');
var port = process.argv[2];
var date = new Date();

function addZero(num) {
	if (num < 10){
		return '0' + num;
	} else {
		return num;
	}
}

var server = net.createServer(function (socket) {
	var data = date.getFullYear() + '-' 
		+ addZero(date.getMonth() + 1) + '-' 
		+ addZero(date.getDate()) + ' ' 
		+ addZero(date.getHours()) + ':' 
		+ addZero(date.getMinutes());
	socket.end(data + '\n');
});
server.listen(port);