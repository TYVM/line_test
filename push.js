var request = require('request');

var headers = {
            'Content-Type' : 'application/json; charset=UTF-8',
            'Authorization': 'Bearer [ZwkXpP/odhUEGquLu0bAhpQF6/++w6/f2y5nqP+cr/LxEHEjM1POAp/D/oulK3JPiF0onMa8Br7iqiBXrgEuEzMa/9GjRCai0X/VNrDxDj9yrY1ohGVvCAwnPy+Fok84gpV9gfvZbgSdUn5iYGEHnAdB04t89/1O/w1cDnyilFU=]'
          };

var data = {
        'to': 'XXXXXXXXX',
        'messages': [{
            'type': 'text',
            'text': 'Hello.world!'
        }]
    };
var options = {
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    headers: headers,
    json: true,
    body: data
};

request(options, function (err, res, body) {
  console.log('finish');
});
