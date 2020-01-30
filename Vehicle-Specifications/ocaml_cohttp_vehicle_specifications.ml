open Lwt
open Cohttp
open Cohttp_lwt_unix

let reqBody = 
  let uri = Uri.of_string "https://api.carsxe.com/specs?vin=5NPET4AF9AH591666&key=brneiz7rk_jw8rp07wl_609srodys&include=selections,attributes,equipment,colors,recalls,warranties,photos" in
  let headers = Header.init ()
  in
  Client.call ~headers `GET uri >>= fun (resp, body) ->
  body |> Cohttp_lwt.Body.to_string >|= fun body -> body

let () =
  let respBody = Lwt_main.run reqBody in
  print_endline (respBody)
