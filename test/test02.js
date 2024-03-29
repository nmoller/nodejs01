const args = {
  '-h': displayHelp,
  '-r': readFile,
};

/**
 * Helper
 */
function displayHelp() {
  console.log('Argument processor', args);
}

/**
 * Test 01
 * @param {*} file
 */
function readFile(file) {
  if (file && file.length) {
    console.log('Reading:', file);
    console.time('read');

    const stream = require('fs').createReadStream(file);
    stream.on('end', function() {
      console.timeEnd('read');
    });

    stream.pipe(process.stdout);
  } else {
    console.error('A file must be provided with the -r option');
    process.exit(1);
  }
}

if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index +1));
    }
  });
}
