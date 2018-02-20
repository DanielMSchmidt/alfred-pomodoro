const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
alfredNotifier();

alfy.config.set('makerKey', alfy.input);

alfy.output([{ title: 'Key is set' }]);
