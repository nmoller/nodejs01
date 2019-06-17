import {CountStream} from './src/countstream';
import {get} from 'https';

const countStream = new CountStream('book');

get('https://www.manning.com', function(res) {
  res.pipe(countStream);
});

countStream.on('total', function(count) {
  console.log('Total matches: ', count);
});
