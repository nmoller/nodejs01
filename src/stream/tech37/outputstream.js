import {Writable} from 'stream';
import {print} from 'util';


/**
 * @class OutputStream
 * @extends Writable
 */
export class OutputStream extends Writable {
    constructor() {
        super();
        super.on('pipe', function(dest) {
            dest.isTTY = this.isTTY;
        }.bind(this));
    }

    _write(chunk, encoding, cb) {
        print(chunk.toString());
    }
}