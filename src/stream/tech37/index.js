import {MemoryStream} from './memorystream';
import {OutputStream} from './outputstream';

let memoryStream = new MemoryStream();

memoryStream.pipe(new OutputStream());
// memoryStream.pipe(process.stdout);