import {Readable} from 'stream';
import {inspect} from 'util';


/**
 * @class StatStream
 * @extends Writable
 */
export class StatStream extends Readable {
    /**
     * 
     * @param {*} size 
     */
    _read(size) {
      if (this.limit === 0) {
          this.push();
      } else {
          this.push(inspect(process.memoryUsage()));
          this.push('n');
          this.limit--;
      }
    }
}
