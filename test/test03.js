var fs = require('fs');
fs.readFile(__dirname + '/names.txt', function(er, buf) {
    console.log(buf);
});