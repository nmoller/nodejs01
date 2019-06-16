var assert = require('assert');
var fs =require('fs');
import { CountStream }  from './../src/countstream';


var countStream = new CountStream('example');
var passed = 0;

countStream.on('total', function(count) {
    assert.equal(count, 1);
    passed++;
});

fs.createReadStream(__filename).pipe(countStream);
process.on('exit', function() {
    console.log('Asserion passed: ', passed);
});