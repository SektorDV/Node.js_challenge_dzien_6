//Twój kod

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const srv = express();

srv.use(express.static('./public/zadanie02'));
srv.use(cookieParser());
srv.use(bodyParser.urlencoded());

srv.post('/cookie/set', (req, res) => {
    let name = req.body['name'];
    console.log(`Entered name ${name}`);
    res.cookie('name', name, {
        maxAge: 31536000000
    });
    res.send('Name set');
    console.log(`Name set to ${req.cookies.name}`);
});

srv.get('/cookie/show', (req, res) => {
    res.send(`Name set to ${req.cookies.name}`);
})

srv.get('/cookie/check', (req, res) => {
    res.send(`Cookie is ${req.cookies.name!=undefined?'':'not'} set`);
})

srv.listen(3000, () => {
    console.log('Listening on port 3000');
})