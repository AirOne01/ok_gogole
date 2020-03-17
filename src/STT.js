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

    recognize (params2) {
        let params3;
        if (params2) {params3 = params2} else {params = params3}

        speechToText.recognize(params3, (err, res) => {
            if (err) {console.log(err)}
            console.log(res.result.results.forEach((result) => {
                console.log(result.alternatives);
            }));
        }).catch(err => {

            console.log(err);
        });
    }
}

module.exports = STT;