//1. kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom(" ") između imena i prezimena. Ispišite na konzolu

var firstName = 'Ivan';
var lastName = 'Horvat';

var fullName = firstName + ' ' + lastName;

console.log(fullName)

//2. razlomite ovu ternarnu operaciju na 3 različite operacije!
var z = 6;
var y = 0;
var x = z === 2 ? y : 5;


if(z===2){
    x=y;
    console.log('x == y')
} else {
    x = 5;
    console.log('x == 5');
}
console.log('x=' + x)

//3. napišite petlju koja će prolaziti kroz brojeve od 1 do 20. za svaku iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "broj 2 je paran")
/*for(x = 1; x < 20; x++){


}
*/


