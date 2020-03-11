// ░▀▀█▀▀░▒█▀▀▀░▀▄░▄▀░▀▀█▀▀░░░░▀▀█▀▀░▒█▀▀▀█░░░░▒█▀▀▀█░▒█▀▀█░▒█▀▀▀░▒█▀▀▀░▒█▀▀▄░▒█░▒█
// ░░▒█░░░▒█▀▀▀░░▒█░░░░▒█░░░▀▀░░▒█░░░▒█░░▒█░▀▀░░▀▀▀▄▄░▒█▄▄█░▒█▀▀▀░▒█▀▀▀░▒█░░░░▒█▀▀█
// ░░▒█░░░▒█▄▄▄░▄▀▒▀▄░░▒█░░░░░░░▒█░░░▒█▄▄▄█░░░░▒█▄▄▄█░▒█░░░░▒█▄▄▄░▒█▄▄▄░▒█▄▄▀░▒█░▒█

// Dependencies
const {IamAuthenticator} = require("ibm-watson/auth");
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const cfg = require("../config/config.json");

// Setup TextToSpeech:
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({apikey: cfg.tts_apikey}),
    url: cfg.tts_apiurl
});