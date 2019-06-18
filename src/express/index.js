import { StatStream } from "./statstream";
import express from 'express';

const app = express();

app.get('/', function(req,res) {
    let statStream = new StatStream();
    statStream.pipe(res);
});

app.listen(3000);
