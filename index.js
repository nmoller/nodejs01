import { CountStream }  from './src/countstream';

var countStream = new CountStream('export');
import { get } from 'https';

get('https://medium.com/@timoxley/named-exports-as-the-default-export-api-670b1b554f65', function(res) {
    res.pipe(countStream);
});

countStream.on('total', function(count) {
    console.log('Total matches: ', count);
});