/*
                                                            ▄▄
         ▀███                                             ▀███
           ██                                               ██
  ▄██▀██▄  ██  ▄██▀     ▄█▀█████ ▄██▀██▄ ▄█▀█████ ▄██▀██▄   ██   ▄▄█▀██
 ██▀   ▀██ ██ ▄█       ▄██  ██  ██▀   ▀████  ██  ██▀   ▀██  ██  ▄█▀   ██
 ██     ██ ██▄██       ▀█████▀  ██     ███████▀  ██     ██  ██  ██▀▀▀▀▀▀
 ██▄   ▄██ ██ ▀██▄     ██       ██▄   ▄███       ██▄   ▄██  ██  ██▄    ▄
  ▀█████▀▄████▄ ██▄▄    ███████  ▀█████▀ ███████  ▀█████▀ ▄████▄ ▀█████▀
                       █▀     ██        █▀     ██
                       ██████▀          ██████▀
              An attempt to copy Google Assistant with IBM Watson
 */

// Dependencies:


// Setup TextToSpeech:
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({apikey: cfg.tts_apikey}),
    url: cfg.tts_apiurl
});