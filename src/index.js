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

const STT = require('./STT.js');
const Dialogflow = require('./Dialogflow');
const dialog = new Dialogflow();

const final = dialog.fullProcess("hello");

//console.log(final);