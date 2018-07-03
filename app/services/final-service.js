var request = require('request');


function invoke(options){
    return new Promise(function(resolve, reject) {
        var req_options = {
            url: options.url,
            method: options.method,
        };

        request(req_options, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                try {
                    resolve(JSON.parse(body));      // if the object is stringified, then parse it and return
                } catch (e) {
                    resolve(body);                  // if it is in object form(not stringified), then simply return it.
                }
            } else {
                reject({
                    msg: 'API seems to be having an issue'
                });
            }
        });
    });
}

module.exports = {
    invoke
}
