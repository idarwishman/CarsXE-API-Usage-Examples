import http.client
import mimetypes
conn = http.client.HTTPSConnection("api.carsxe.com")
payload = ''
headers = {

}
conn.request("GET", "/specs?vin=5NPET4AF9AH591666&key=brneiz7rk_jw8rp07wl_609srodys&include=selections,attributes,equipment,colors,recalls,warranties,photos", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
