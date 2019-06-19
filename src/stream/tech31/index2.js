import {JSONLineReader} from "./jsonlinereader";
import {Rewindable} from './rewindable';
import fs from 'fs';
import express from 'express';

const app = express();
const input = fs.createReadStream(__dirname + '/json-lines.txt', {
    encoding: "utf8"
});

let rewindable = input.pipe(new Rewindable());

app.get('/', function(req, res) {

    res.set('Content-Type', 'application/json');
    
    // let jsonLineReader = new JSONLineReader(input);
    let jsonLineReader = new JSONLineReader(rewindable.rewind());
    jsonLineReader.pipe(res);
    
});


app.listen(3000);