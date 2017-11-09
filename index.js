const express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
const app = express();

app.use('/blissful_sounds', express.static('blissful_sounds'));
app.use('/css', express.static('css'));
app.use('/font-awesome', express.static('font-awesome'));
app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));
app.use('/vid', express.static('vid'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(process.env.PORT || 9000);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/download_blissful_sounds_001', function(req, res){
    res.render('download blissful sounds 001')
});

app.get('/download_blissful_sounds_002', function(req, res){
    res.render('download blissful sounds 002')
});

app.get('/download_blissful_sounds_003', function(req, res){
    res.render('download blissful sounds 003')
});

app.get('/download_blissful_sounds_004', function(req, res){
    res.render('download blissful sounds 004')
});

app.get('/download_blissful_sounds_005', function(req, res){
    res.render('download blissful sounds 005')
});

app.get('/download_blissful_sounds_006', function(req, res){
    res.render('download blissful sounds 006')
});

app.get('/download_blissful_sounds_007', function(req, res){
    res.render('download blissful sounds 007')
});
