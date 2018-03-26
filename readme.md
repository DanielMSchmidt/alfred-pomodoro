# alfred-pomodoro

> [Alfred 3](https://www.alfredapp.com) workflow to start a pomodoro with focused time by rescuetime and adding a google calendar event

## Install

```
$ npm install --global alfred-pomodoro
```

\*Requires [Node.js](https://nodejs.org) 4+, the Alfred [Powerpack](https://www.alfredapp.com/powerpack/) & [Focus](https://heyfocus.com/) .

Optionally, if you'd like to have a google calendar event and a Rescue Time FocussedTime event started, too please install [RescueTime](https://www.rescuetime.com/) in the paid version, a Google Calendar and [IFTTT](ifttt.com) connected to both of them.

1. Install focus by running `brew cask install focus`

**Optional**

2. Create one applet with "If maker Event "start_pomodoro", then start a FocusTime session"
3. Create a second applet with "If maker Event "start_pomodoro" then quick add event to <your calendar>"
   * Customize the event as you like, mine is "Pomodoro for 25 minutes" making the event 25 minutes long
4. Go to the [settings page of the maker web hooks](https://ifttt.com/services/maker_webhooks/settings) and copy everything after `https://maker.ifttt.com/use/`. This is your key.
5. Set the key in alfred by typing `_pomodoro` and having the key as argument.

## Usage

Start your first pomodoro with alfred by typing `pomodoro`. This will start the pomodoro, will tell it IFTTT and set the Do not Disturb Modus to on.

## License

MIT © [Daniel Schmidt](https://danielmschmidt.de)
