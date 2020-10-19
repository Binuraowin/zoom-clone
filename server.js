const express = require('express');
const app = express();
const server = require('http').Server(app);
app.set('view engine','ejs');
server.listen(3030);
app.get('/',(req,res) =>{
    res.render('room')
})