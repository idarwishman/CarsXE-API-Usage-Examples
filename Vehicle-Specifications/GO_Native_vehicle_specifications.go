package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.carsxe.com/specs?vin=5NPET4AF9AH591666&key=brneiz7rk_jw8rp07wl_609srodys&include=selections,attributes,equipment,colors,recalls,warranties,photos"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
