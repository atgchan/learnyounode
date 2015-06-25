module.exports = function (dir, ext, callback) {
	var fs = require('fs');
	var path = require('path');
	result = [];
	fs.readdir(dir, function (err, data) {
		if(err) {
			return callback(err, null);
		}

		data.forEach(function (entry) {
			if (path.extname(entry) === ('.' + ext)) {
				result.push(entry);
			}
		});
		return callback(null, result);
	});
};