var $ = require("jquery");
var FormData = require('form-data');
var navigator = require('navigator')
var request = require('request');
var fs = require('fs');

exports("sendScreenshot", (filename, content) => {
    var options = {
        'method': 'POST',
        'url': 'webhookURLHERE',
        formData: {
            'file1': {
                'value': fs.createReadStream('./' + filename),
                'options': {
                    'filename': '/D:/Server-Directory/' + filename,
                    'contentType': null
                }
            },
            'content': content,
            "avatar_url": "https://www.online-tech-tips.com/wp-content/uploads/2019/09/discord.jpg"
        }
    };
    request(options, function(error, response) {
        console.log(response.body);
    });
});