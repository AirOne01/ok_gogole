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
const randomJS = require('random-js')

const bank = require('../config/bank');
const cfg = require('../config/config');

module.exports = class Dialogflow {

    clearText(text) {
        // This method basically make your bot whoever you want, be it Alexa, Siri or Google.
        text = text.replace("NAME", cfg.dialogflow.NAME);
        text = text.replace("SNAME", cfg.dialogflow.SNAME);
        text = text.replace("CALL", cfg.dialogflow.CALL);

        return text;
    }

    checkResponse(res) {
        // Check if there are multiple response for one question. If yes, choose one randomly.
        if (typeof res !== "string") {

            const engine = randomJS.MersenneTwister19937.autoSeed();
            return randomJS.pick(engine, res);
        } else return res;
    }

    getResponse(question) {

        let bankArray = [];
        let count = 0;

        // Gets all the possible questions in an array (because objects are horrible)
        for (let i in bank) {

            // Checking if "ques" exist.
            if (!bank[i].hasOwnProperty("ques")) {
                console.log("Missing \"ques\" parameter in ../config/bank.json[i]. Exiting.");
                return;
            }

            // Checking if "res" exist. Can prevent fatal errors.
            if (!bank[i].hasOwnProperty("res")) {
                console.log("Missing \"res\" parameter in ../config/bank.json[i]. Exiting.");
                return;
            }

            // Then if everything is fine, add the entry to the array.
            bankArray[count] = bank[i].ques;
            count++
        }

        // Part 2: get the question the most close to the one the user asked
        let ques = stringSimilarity.findBestMatch(question, bankArray).bestMatch.target;
        let res;

        // Then get the response of this question
        for (let i in bank) {

            if (bank[i].ques === ques) {

                res = bank[i].res;
            }
        }

        res = this.checkResponse(res);      // Check the response
        res = this.clearText(res);          // Clear the text (final step b4 sending to user)

        return res;
    }

    fullProcess(text) {

        const question = this.clearText(text);
        return this.getResponse(question);
    }
};