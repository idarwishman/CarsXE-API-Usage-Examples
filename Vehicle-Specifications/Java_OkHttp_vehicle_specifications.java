OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://api.carsxe.com/specs?vin=5NPET4AF9AH591666&key=brneiz7rk_jw8rp07wl_609srodys&include=selections,attributes,equipment,colors,recalls,warranties,photos")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
