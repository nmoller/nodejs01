import {Readable} from 'stream';
import {inspect} from 'util';


/**
 * @class MemoryStream
 * @extends Readable
 */
export class MemoryStream extends Readable {
    constructor() {
        super();
        super.isTTY = process.stdout.isTTY;
    }

    _read() {
        let text = JSON.stringify(process.memoryUsage());
        if (this.isTTY) {
            this.push('\u001b[32m' + text + '\u001b[39m' + '\n');
        } else {
            this.push(text);
        }
    }
}