var express = require('express');
var app = express();

app.set('view enjine', 'ejs');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/resume.html');
});
/*
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res) {
  var data = {age: 26, job: 'Back-end developer'}
  res.render('profile.ejs', {person: req.params.name, data: data});
});
*/
app.listen(3000);
