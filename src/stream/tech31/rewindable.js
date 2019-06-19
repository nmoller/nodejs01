import stream, { PassThrough } from 'stream';

/**
 * From 
 * @borrows https://stackoverflow.com/questions/36980201/how-to-reset-nodejs-stream
 */
export class Rewindable extends stream.Transform {

    constructor() {
      super();
      super.accumulator = [];
    }
  
    _transform(buf, enc, cb) { 
      this.accumulator.push(buf);
      cb();
    }
  
    rewind() {
      var st = new PassThrough();
      this.accumulator.forEach((chunk) => st.write(chunk))
      return st;
    }
}