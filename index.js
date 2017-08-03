const express = require('express');
const app = express();

app.use('/blissful_sounds', express.static('blissful_sounds'));
app.use('/css', express.static('css'));
app.use('/font-awesome', express.static('font-awesome'));
app.use('/fonts', express.static('fonts'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));
app.use('/vid', express.static('vid'));

app.listen(process.env.PORT || 9000);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});