var express = require('express');
var app = express();

app.post('/callback', function (req, res) {
  var headers = {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization': 'Bearer [ZwkXpP/odhUEGquLu0bAhpQF6/++w6/f2y5nqP+cr/LxEHEjM1POAp/D/oulK3JPiF0onMa8Br7iqiBXrgEuEzMa/9GjRCai0X/VNrDxDj9yrY1ohGVvCAwnPy+Fok84gpV9gfvZbgSdUn5iYGEHnAdB04t89/1O/w1cDnyilFU=]'
  };
  var data = {
      to: 'XXXXXXXXX',
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
  res.send(data);
  console.log(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
