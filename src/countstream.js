import { Writable } from 'stream';
import { inherits } from 'util';

export class CountStream {
    constructor(matchText, options) {
        Writable.call(this, options);
        this.count = 0;
        this.matcher = new RegExp(matchText, 'ig');
    }
    _write(chunk, encoding, cb) {
        var matches = chunk.toString().match(this.matcher);
        if (matches) {
            this.count += matches.length;
        }
        cb();
    }
    end() {
        this.emit('total', this.count);
    }
}

inherits(CountStream, Writable);
