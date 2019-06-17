import events  from 'events';
import { inherits } from 'util';

var AudioDevice = {
    play: function(track) {
        console.log('playing:', track);
    },

    stop: function() {
        console.log('stopped');
    }
}

function MusicPlayer() {
    this.playing = false;
    events.EventEmitter.call(this);
}

inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer();
musicPlayer.on('play', function(track) {
    this.playing = true;
    AudioDevice.play(track);
});

musicPlayer.on('stop', function(track) {
    this.playing = false;
    AudioDevice.stop();
});

musicPlayer.emit('play', 'The testers - Baby test my fire');

setTimeout(function() {
    musicPlayer.emit('stop');
}, 1000);
