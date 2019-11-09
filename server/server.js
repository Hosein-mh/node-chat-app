const path = require('path');
const express = require('express');

var app = express();

const publicDir = path.join(__dirname , '../public');
const Port = process.env.Port || 3000;

//configs
app.use(express.static(publicDir));

app.listen(Port , () => {
    console.log(`app is up on ${Port}`);
})