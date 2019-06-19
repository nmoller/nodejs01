import {JSONLineReader} from "./jsonlinereader";
import fs from 'fs';

let input = fs.createReadStream(__dirname + '/json-lines.txt', {
    encoding: "utf8"
});

let jsonLineReader = new JSONLineReader(input);

jsonLineReader.on('object', function(obj) {
    console.log('test01:', obj.test01, ' - test03:', obj.test03);
});
