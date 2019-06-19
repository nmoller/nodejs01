import {CSVParser} from "./cvsparser";
import fs from 'fs';

let parser = new CSVParser();

parser.on('inspection', function(line){
    console.log(line);
});

fs.createReadStream(__dirname + '/sample.csv')
    .pipe(parser)
    .pipe(process.stdout);