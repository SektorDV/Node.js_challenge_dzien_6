//Twój kod

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const srv = express();


srv.use(cookieParser());
srv.use(bodyParser.urlencoded());

srv.get('/', (req, res)=> {
    let comments = JSON.parse(req.cookies.comments);
    res.send(`${comments}<br><a href='/add'>Add a comment</a>`);
})
srv.use('/add', express.static('./public/zadanieDnia/add.html'));
srv.post('/save', (req, res) => {
    let cookie = getCommentsCookie(req.cookies.comments);
    cookie.push(req.body['comment']);
    res.cookie('comments', JSON.stringify(cookie));
    
    res.send(`Comment sent.<br><a href='/'>Return</a>`)
});

srv.listen(3000, () => {
    console.log('listening on port 3000');
});


function getCommentsCookie(cookie) {
    return cookie?JSON.parse(cookie):[];
}