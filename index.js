const alfy = require("alfy");
const alfredNotifier = require("alfred-notifier");
const IFTTT = require("node-ifttt-maker");
const exec = require("child_process").execSync;

// update this workflow
alfredNotifier();

const makerKey = alfy.config.get("makerKey");

if (makerKey) {
	const client = new IFTTT(makerKey);
	client.request({ event: "start_pomodoro" }).then(
		function() {},
		function(err) {
			alfy.output([{ title: "Error:" + err }]);
		}
	);
}

exec("open 'focus://focus?minutes=25'");
alfy.output([{ title: "Done, 25 minutes, clock is ticking" }]);
