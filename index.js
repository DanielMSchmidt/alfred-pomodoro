const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const IFTTT = require('node-ifttt-maker')

// update this workflow
alfredNotifier();

const client = new IFTTT(alfy.config.get('makerKey'));
client.request({ event: 'start_pomodoro' }).then(function() {
	alfy.output([{ title: 'Done, 25 minutes, clock is ticking' }]);
}, function(err) {
	alfy.output([{ title: 'Something went wrong:' + err }]);
});

