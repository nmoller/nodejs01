import {Readable} from 'stream';
import {inspect} from 'util';


/**
 * @class StatStream
 * @extends Readable
 */
export class StatStream extends Readable {

    /**
     * 
     * @param int limit 
     */
    constructor(limit) {
        super();
        super.limit = limit;
    }

    /**
     * 
     * @param {*} size 
     */
    _read(size) {
      if (this.limit === 0) {
          this.push(null);
      } else {
          this.push(inspect(process.memoryUsage()));
          this.push('n');
          this.limit--;
      }
    }
}
