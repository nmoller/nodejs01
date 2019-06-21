import fs from 'fs';

// fs.readFile(__dirname + '/config-bad.json', function (err, buf) {
fs.readFile(__dirname + '/not-there.json', function (err, buf) {
// fs.readFile(__dirname + '/config.json', function (err, buf) {
    //try {
        let config = JSON.parse(buf.toString());
        process.stdout.write(buf);
        console.log(config);
    // } catch (e) {
    //     if (e instanceof SyntaxError) {
    //         // console.log('Error');
    //         process.stdout.write('Error \n');
    //     } else {
    //         console.error('Unexpected');
    //     }
    // }
});

process.on('uncaughtException',() => {console.log('Hmmmm');});