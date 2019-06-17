/* eslint-disable require-jsdoc */
import events from 'events';
import {inherits} from 'util';

class MusicPlayer {
  constructor(test) {
    this.playing = false;
    events.EventEmitter.call(this);
  }
}


inherits(MusicPlayer, events.EventEmitter);

const musicPlayer = new MusicPlayer();

musicPlayer.on('play', function() {
  // eslint-disable-next-line no-invalid-this
  this.emit('error', 'Houston, we have a problem');
});

musicPlayer.on('error', function(err) {
  console.error('Error:', err);
});


setTimeout(function() {
  musicPlayer.emit('play', 'The testers - Baby test my fire');
}, 1000);
