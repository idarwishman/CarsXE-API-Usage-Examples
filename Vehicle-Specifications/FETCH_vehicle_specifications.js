var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

var vin = "5NPET4AF9AH591666";
var apiKey = "brneiz7rk_jw8rp07wl_609srodys";
var includeData = "selections,attributes,equipment,colors,recalls,warranties,photos"

fetch(`https://api.carsxe.com/specs?vin=${vin}&key=${apiKey}&include=${includeData}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
