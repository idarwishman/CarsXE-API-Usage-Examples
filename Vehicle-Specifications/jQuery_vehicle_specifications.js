var vin = "5NPET4AF9AH591666"; // replace with the VIN you'd like to look up
var apiKey = "brneiz7rk_jw8rp07wl_609srodys"; // replace with your own API key
var includeData = "selections,attributes,equipment,colors,recalls,warranties,photos"; // remove items you don't need (or keep them all)

var settings = {
  "url": `https://api.carsxe.com/specs?vin=${vin}&key=${apiKey}&include=${includeData}`,
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
