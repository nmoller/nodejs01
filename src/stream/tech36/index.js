import stream from 'stream';

class MemoryStream extends stream {
    constructor(interval) {
        super();
        super.readable = true;

        setInterval(function() {
            let data = process.memoryUsage();
            data.date = new Date();
            this.emit('data', JSON.stringify(data) + '\n');
        }.bind(this), interval);
    }
}

let memoryStream = new MemoryStream(250);
let wrappedStream = new stream.Readable().wrap(memoryStream);

wrappedStream.pipe(process.stdout);