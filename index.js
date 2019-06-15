import { CountStream }  from './src/countstream';

var countStream = new CountStream('book');
import { get } from 'https';

get('https://www.manning.com', function(res) {
    res.pipe(countStream);
});

countStream.on('total', function(count) {
    console.log('Total matches: ', count);
});