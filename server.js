var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/callback', function (req, res) {
  var headers = {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization': 'Bearer [ZwkXpP/odhUEGquLu0bAhpQF6/++w6/f2y5nqP+cr/LxEHEjM1POAp/D/oulK3JPiF0onMa8Br7iqiBXrgEuEzMa/9GjRCai0X/VNrDxDj9yrY1ohGVvCAwnPy+Fok84gpV9gfvZbgSdUn5iYGEHnAdB04t89/1O/w1cDnyilFU=]'
  };
  var data = {
      replyToken: req.body.events[0].replyToken,
      messages: [{
          'type': 'text',
          'text': 'Hello.world!'
      }]
  };
  var options = {
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: headers,
      json: true,
      body: data
  };
  request.post(options, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      console.log(body);
    } else {
      console.log('err: ' + JSON.stringify(res));
    }
  });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running');
});
