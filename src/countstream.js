import {Writable} from 'stream';
import {inherits} from 'util';

/**
 * @class CountStream
 * @extends Writable
 */
export class CountStream {
  /**
   *
   * @param {string} matchText
   * @param {Array} options
   */
  constructor(matchText, options) {
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig');
  }

  /**
   *
   * @param {*} chunk
   * @param {*} encoding
   * @param {*} cb
   */
  _write(chunk, encoding, cb) {
    const matches = chunk.toString().match(this.matcher);
    if (matches) {
      this.count += matches.length;
    }
    cb();
  }

  /**
   *
   */
  end() {
    this.emit('total', this.count);
  }
}

inherits(CountStream, Writable);
