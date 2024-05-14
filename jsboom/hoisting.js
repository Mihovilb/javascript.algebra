/*var x = 2;
var y = 3;

var z = x + y;

console.log(z);

function zbroji(){
    let n = 3;
    let m = 4;
    console.log("1. n=" + n);
    
    console.log("2. n=" + n);
    
    console.log(n + m);
}
*/
/*
1. pratite kod u script.js. koje su vrijednosti y i z varijbali na kraju programa?

2. of funkcije u prvom zadatku stvoreite samopozivajuću anonimnu funkciju koja
- prima parametar "name".
Kreirajte globalnu varijablu koju ta funkcija koristi i zadajte joj vrijednost.
*/


var x = "John Doe";
function vratiNesto(name) {      //lokalni scope
    var x = name;
    function f() { return x; }  // definicija funckije
    return f;
}

var y = vratiNesto("Jane Doe");
console.log(y); // -- y je postao funkcija

var z = vratiNesto()(); // -- z = undefined
console.log(z);

z = vratiNesto("test")();
console.log(z);



//2.
console.log("----------");

var name1 ="Moje ime";

(function vratiNesto2(name1) {
console.log("invoked vratiNesto2(" + name1 + ")");       
    var x = name1;
    function f() { 
        console.log("invoked f()");
    return x;
 }  
    return f;
})(name1);