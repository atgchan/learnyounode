var http = require('http');
var result = [];
var urls = process.argv.slice(2);

for (var i = 0; i < urls.length; i++){
	result[i] = null;
}

for (var i = 0; i < urls.length; i++){
	(function (i) {
		http.get(urls[i], function(res) {
			var con_str = '';

			res.setEncoding('utf8');
			res.on('data', function(data) {
				con_str += data;
			});
			res.on('end', function() {
				result[i] = con_str;
				var count = 0;
				
				for (j = 0; j < urls.length; j++){
					if (result[j] != null) {
						count++;
					}
				}

				if (count === urls.length){
					for (j = 0; j < urls.length; j++) {
						console.log(result[j]);
					}
				}
			});
			res.on('error', function(e) {
				console.error(e);
			});
		});
	}) (i);
}