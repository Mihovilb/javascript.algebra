console.log("Visine je: " + window.innerHeight);
console.log("Širina je: " + window.innerWidth);

console.log("Domena je: " + window.location.hostname);

var winLocation = window.location;

console.log("Window Location: " + window.location);

var x = window.confirm("Ovime prihvaćate našu politiku o kolačićima");
console.log("response = " + x);
if (x == true){
    console.log("Korisnik odgovorio OK");
} else {
    console.log("Korisnik odgovorio NOK");
    window.location = "onama.html";
}
//console.log("end page 1");
//window.alert("Test allert");
console.log("end page");

window.setTimeout(function() {
    console.log("Ispis sa delay od 5 sec");
}, 5000); 


