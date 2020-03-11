// ░▒█▀▀▀█░▒█▀▀█░▒█▀▀▀░▒█▀▀▀░▒█▀▀▄░▒█░▒█░░░░▀▀█▀▀░▒█▀▀▀█░░░░▀▀█▀▀░▒█▀▀▀░▀▄░▄▀░▀▀█▀▀
// ░░▀▀▀▄▄░▒█▄▄█░▒█▀▀▀░▒█▀▀▀░▒█░░░░▒█▀▀█░▀▀░░▒█░░░▒█░░▒█░▀▀░░▒█░░░▒█▀▀▀░░▒█░░░░▒█░░
// ░▒█▄▄▄█░▒█░░░░▒█▄▄▄░▒█▄▄▄░▒█▄▄▀░▒█░▒█░░░░░▒█░░░▒█▄▄▄█░░░░░▒█░░░▒█▄▄▄░▄▀▒▀▄░░▒█░░

// Dependencies
const fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const {IamAuthenticator} = require('ibm-watson/auth');
const cfg = require("../config/config.json");

// Params
let params = {
    audio: fs.createReadStream('../1.ogg'),
    contentType: 'audio/ogg; rate=4410',
    model: 'fr-FR_NarrowbandModel'
};

// Setup SpeechToText:
const speechToText = new SpeechToTextV1({
    authenticator: new IamAuthenticator({apikey: cfg.stt_apikey}),
    url: cfg.stt_apiurl
});

class STT {

    recognize (stream, params) {

        speechToText.recognize(params, (err, res) => {
            if (err) {console.log(err)}
            console.log(res.result.results.forEach((result) => {
                console.log(result.alternatives)
                // HANDLE THE RESULT HERE
            }));
        }).catch(err => {

            console.log(err);
        });
    }
}