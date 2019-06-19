import stream from 'stream';
import util from 'util';

export class CSVParser extends stream.Transform {
    
    /**
     * 
     * @param {object} options 
     */
    constructor(options) {
        super(options);
        super.value = '';
        super.headers = [];
        super.values = [];
        super.line = 0;
    }
    
    /**
     * 
     * @param {*} chunk 
     * @param {*} encoding 
     * @param {*} done 
     */
    _transform(chunk, encoding, done) {
        let c;
        let i;
        chunk = chunk.toString();

        for (i = 0; i < chunk.length; i++) {
            c = chunk.toString().charAt(i);
            if (c === ',') {
                this.addValue();
            } else if (c === 'n') {
                this.addValue();
                if (this.line > 0) {
                    // pour que ça s'affiche plus beau...j'ajoute saut de ligne.
                    this.push(JSON.stringify(this.toObject())+'\n');
                }
                this.values = [];
                this.line++;
            } else {
                this.value += c;
            }
            //this.emit('inspection', c);
        }
        //this.emit('inspection', chunk);
        done();
    }

    /**
     * @returns {object}
     */
    toObject() {
        let i;
        let obj = {};
        for (i = 0; i < this.headers.length; i++) {
            // pour traiter saut de ligne qui restait.
            obj[this.headers[i]] = this.values[i].replace(/\n/g,'');
        }
        return obj;
    }

    /**
     * Push value to corresponding place
     */
    addValue() {
        if (this.line === 0) {
            this.headers.push(this.value);
        } else {
            this.values.push(this.value);
        }
        // this.emit('inspection', this.value);
        this.value = '';
    }
}