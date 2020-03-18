// ░▒█▀▀▄░▀█▀░█▀▀▄░▒█░░░░▒█▀▀▀█░▒█▀▀█░▒█▀▀▀░▒█░░░░▒█▀▀▀█░▒█░░▒█
// ░▒█░▒█░▒█░▒█▄▄█░▒█░░░░▒█░░▒█░▒█░▄▄░▒█▀▀░░▒█░░░░▒█░░▒█░▒█▒█▒█
// ░▒█▄▄█░▄█▄▒█░▒█░▒█▄▄█░▒█▄▄▄█░▒█▄▄▀░▒█░░░░▒█▄▄█░▒█▄▄▄█░▒▀▄▀▄▀

/* Temp module that gets a response with question requesting a file bank.
Since Dialogflow is becoming private with Google Cloud since V2, i'll use a
hand-made sentence recognition program.
Because of this, predefined params had to be set beforehand launching the bot.
You can find them in ../config/config.json
Here's the list:
NAME       Name of the bot, usually "Assistant Google"
SNAME      Short name of the bot, usually "Google"
CALL       Method to call the bot, usually "OK Google"
*/

const stringSimilarity = require('string-similarity');

const bank = require('../config/bank');

const cfg = require('../config/config');

module.exports = class Dialogflow {

    clearText(text) {

        text = text.replace("NAME", cfg.dialogflow.NAME);
        text = text.replace("SNAME", cfg.dialogflow.SNAME);
        text = text.replace("CALL", cfg.dialogflow.CALL);

        return text;
    }

    getResponse(question) {

        let bankArray = [];
        let count = 0

        for (let i in bank) {

            if (bank[i].ques) {

                bankArray[count] = bank[i].res
                count++
            }
        }

        let res = stringSimilarity.findBestMatch(question, bankArray).bestMatch.target;

        res = this.clearText(res);

        return res;
    }

    fullProcess(text) {

        const question = this.clearText(text);
        return this.getResponse(question);
    }
};