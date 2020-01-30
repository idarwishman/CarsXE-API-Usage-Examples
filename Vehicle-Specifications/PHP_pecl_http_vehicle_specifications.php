<?php
$client = new http\Client;
$request = new http\Client\Request;
$request->setRequestUrl('https://api.carsxe.com/specs?vin=5NPET4AF9AH591666&key=brneiz7rk_jw8rp07wl_609srodys&include=selections,attributes,equipment,colors,recalls,warranties,photos');
$request->setRequestMethod('GET');
$request->setOptions(array());
$request->setHeaders(array(

));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
