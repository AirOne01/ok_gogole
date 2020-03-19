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

const fs = require('fs');
const STT = require('./STT.js');
const Dialogflow = require('./Dialogflow');
const dialog = new Dialogflow();
const express = require('express');
const app = express();

const indexPage = new Buffer(fs.readFileSync('./index.html'));

app.get('/health', (req, res) => {

    res.send({state: "alive"})
});

app.get('/', (req, res) => {

    res.set('Content-Type', 'text/html');
    res.send(indexPage);
});

app.listen('9999');

console.log("Listenning on port 9999")