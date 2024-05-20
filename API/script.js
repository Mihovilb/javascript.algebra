var request = new XMLHttpRequest();
// endpoint data: https://xsmilex007.github.io/JS-API-example/mydata.json


// otvaramo konekciju prema endpointu, koristimo GET metodu izvršavanja
// jer želimo dohvatiti podatke (samo dohvaćamo podatke)

request.open("GET", "https://xsmilex007.github.io/JS-API-example/mydata.json", true);

// iniciramo GEt request prema endpointu
request.send();

// ovdje implementiramo odgađaj nakon što smo dohvatili podatke
// isparsat ćemo JSON, petvorit ga u objekt te ga prikazati na stranici

request.onload = function(result) {
    console.log(result.currentTarget.response);

    const obj = JSON.parse(result.currentTarget.response)

    let city = obj.request.query; // San Francisco, United States of America"

    console.log("isparsani grad = " + city);

    let country = obj.location.country; 
    let region = obj. location.region;
    let temperature = obj.current.temparature;
    let uvIndex = obj.current.uv_index;

    console.log(`Country=${country}|Region:${region}|Temperature=${temperature}|UV Index${uvIndex}`);

    document.getElementById("city").value = city; // input field
    document.getElementById("country").textContent = country;
    document.getElementById("region").textContent = region;
    document.getElementById("temperature").textContent = temperature
    document.getElementById("uvindex").textContent = uvIndex
};