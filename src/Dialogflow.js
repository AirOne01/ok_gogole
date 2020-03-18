// ░▒█▀▀▄░▀█▀░█▀▀▄░▒█░░░░▒█▀▀▀█░▒█▀▀█░▒█▀▀▀░▒█░░░░▒█▀▀▀█░▒█░░▒█
// ░▒█░▒█░▒█░▒█▄▄█░▒█░░░░▒█░░▒█░▒█░▄▄░▒█▀▀░░▒█░░░░▒█░░▒█░▒█▒█▒█
// ░▒█▄▄█░▄█▄▒█░▒█░▒█▄▄█░▒█▄▄▄█░▒█▄▄▀░▒█░░░░▒█▄▄█░▒█▄▄▄█░▒▀▄▀▄▀

/* Temp module that gets a response with question requesting a file bank.
Since Dialogflow is becoming private with Google Cloud since V2, i'll use a
hand-made sentence recognition program.
Because of this, predefined params had to be set beforehand launching the bot.
You can find them in ../config/config.json
Here's the list:
$NAME       Name of the bot, usually "Assistant Google"
$SNAME      Short name of the bot, usually "Google"
$CALL       Method to call the bot, usually "OK Google"
*/

const bank = require('../config/bank.json')

class Dialogflow {

    refreshQuestion
}