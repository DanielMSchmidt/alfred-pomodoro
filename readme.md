# alfred-pomodoro

> [Alfred 3](https://www.alfredapp.com) workflow to start a pomodoro with focused time by rescuetime and adding a google calendar event

## Install

```
$ npm install --global alfred-pomodoro
```

*Requires [Node.js](https://nodejs.org) 4+, the Alfred [Powerpack](https://www.alfredapp.com/powerpack/), [RescueTime](https://www.rescuetime.com/) in the paid version, a Google Calendar and [IFTTT](ifttt.com) connected to both of them (and set up accordingly):

1. Create one applet with "If maker Event "start_pomodoro", then start a FocusTime session"
2. Create a second applet with "If maker Event "start_pomodoro" then quick add event to <your calendar>"
	-	Customize the event as you like, mine is "Pomodoro for 25 minutes" making the event 25 minutes long
3. Go to the [settings page of the maker web hooks](https://ifttt.com/services/maker_webhooks/settings) and copy everything after `https://maker.ifttt.com/use/`. This is your key.
4. Set the key in alfred by typing `_pomodoro` and having the key as argument.

## Usage

Start your first pomodoro with alfred by typing `pomodoro`


## License

MIT © [Daniel Schmidt](https://danielmschmidt.de)
