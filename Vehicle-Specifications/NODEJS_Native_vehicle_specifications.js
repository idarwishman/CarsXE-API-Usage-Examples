var https = require('follow-redirects').https;
var fs = require('fs');

var vin = "5NPET4AF9AH591666"; // replace with the VIN you'd like to look up
var apiKey = "brneiz7rk_jw8rp07wl_609srodys"; // replace with your own API key
var includeData = "selections%2Cattributes%2Cequipment%2Ccolors%2Crecalls%2Cwarranties%2Cphotos"; // remove items you don't need (or keep them all)

var options = {
  'method': 'GET',
  'hostname': 'api.carsxe.com',
  'path': `/specs?vin=${vin}&key=${apiKey}&include=${includeData}`,
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
