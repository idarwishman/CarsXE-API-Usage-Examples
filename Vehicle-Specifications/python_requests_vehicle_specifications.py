import requests

url = "https://api.carsxe.com/specs?vin=5NPET4AF9AH591666&key=brneiz7rk_jw8rp07wl_609srodys&include=selections,attributes,equipment,colors,recalls,warranties,photos"

payload = {}
headers = {

}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
