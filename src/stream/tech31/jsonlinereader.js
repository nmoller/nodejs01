import stream from 'stream';
import util from 'util';

/**
 * @class JSONLineReader
 * @extends stream.Readable
 */
export class JSONLineReader extends stream.Readable {
    
    /**
     * 
     * @param {stream.Readable} source 
     */
    constructor(source) {
        super();
        super._source = source;
        super._foundLineEnd = false;
        super._buffer = '';

        source.on('readable', function(){
            this.read();
        }.bind(this));
    }

    /**
     * @emits object json objet found in stream
     * @param {*} size 
     */
    _read(size) {
        let chunk;
        let line;
        let lineIndex;
        let result;

        if (this._buffer.length === 0) {
            chunk = this._source.read();
            this._buffer += chunk;
        }

        lineIndex = this._buffer.indexOf('n');

        if (lineIndex !== -1) {
            line = this._buffer.slice(0, lineIndex);
            if (line) {
                result = JSON.parse(line);
                this._buffer = this._buffer.slice(lineIndex + 1);
                this.emit('object', result);
                this.push(util.inspect(result));
            } else {
                this._buffer = this._buffer.slice(1);
            }
        }
    }
}