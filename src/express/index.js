import {StatStream} from "./statstream";
import express from 'express';

const app = express();

app.get('/', function(req, res) {
    let statStream = new StatStream(5);

    statStream.pipe(res);
    
});

app.get('/test', function(req, res) {
    res.send('allô');
});


app.listen(3000);
