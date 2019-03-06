//Twój kod

const express = require('express');
const srv = express();
const bodyParser = require('body-parser');
srv.use(express.static('./public/zadanie01'));
srv.use(bodyParser.urlencoded());

srv.post('/form/submit', (req, res) => {
    res.send(`${req.body['secondNumber']} ${req.body['firstNumber']%req.body['secondNumber']==0?'':'nie'} jest dzielnikiem ${req.body['firstNumber']}`);
});


srv.listen(3000, () => {
    console.log('listening on port 3000');
})

