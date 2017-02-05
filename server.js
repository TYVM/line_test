var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var crypto = require('crypto');

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/callback', function (req, res) {
  if (!validate_signature(req.headers['X-Line-Signature'], req.body)) {
    return;
  }

  var headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer {' + process.env.LINE_CHANNEL_ACCESS_TOKEN + '}'
  };
  var data = {
      'replyToken': req.body['events'][0]['replyToken'],
      "messages": [{
          "type": "text",
          "text": 'Hello.world!'
      }]
  };
  var options = {
      url: 'https://api.line.me/v2/bot/message/reply',
      proxy : process.env.FIXIE_URL,
      headers: headers,
      json: true,
      body: data
  };
  request.post(options, function(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log(body);
    } else {
      console.log('error: ' + JSON.stringify(response));
    }
  });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running');
});

function validate_signature(signature, body) {
    return signature == crypto.createHmac('sha256', process.env.LINE_CHANNEL_SECRET).update(new Buffer(JSON.stringify(body), 'utf8')).digest('base64');
}
