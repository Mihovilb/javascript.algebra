var myNiz = ['ime','prezime','gidube','broj cipela','itd'];

function pronadjiNajduzuRijec(niz) {
    var najduzaRijec = '';
    var duljina = 0;
    for (var ime of niz) {
        if (ime.lenght > duljina) {
            duljina = ime.lenght;
            najduzaRijec = ime;
        }
    }
    return najduzaRijec;
}

//2
var najduzaRijec = pronadjiNajduzuRijec(myNiz);

//3
console.log('najduza rijec: ' + najduzaRijec);

function getMax(a, b){
    let retVal;
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'nisu svi parametri brojevi'
    }
    /*
    if (a === b) {
        return a; // vrati prvi odnos "a"
    }
    if (a > b) {
        return a;
    }
    return b;
*/
    if (a > b){
        retVal = a;
    } else if (b >a) {
        retVal = b;
    } else if (a === b){
        retVal = a; // vrati prvi, odnosno "a"
    } else{
        retVal = 'kruške i jabuke nisu isto';
    }
    return retVal;
}
console.log('Veći broj je: ' + getMax('a', -25));
//getMax(1, 2);

function sumiraj(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'error'
    }
    return a+b;
}

console.log(sumiraj('2', 3));
console.log(sumiraj('2', 3));

var prvi = sumiraj(3, 3);
var drugi = sumiraj(5, 5);
if(prvi !== 'error' && prvi !== 'error') {
var dvaputasuma = prvi * drugi;
console.log(dvaputasuma);
} else {
    console.log('ne mogu ti izračunati')
}

function pomnozi(a, b) {
    return a * b;
}

var izracun = pomnozi((pomnozi(2,3) * pomnozi(8, 9)) / pomnozi(2,2), 4);

console.log(izracun);


function podijeli(a, b){
    if(b == 0){
        console.log('dijeljenje s nulom nije definirano');
        return 'error';
    }
    return a / b;
    
}

var dijeljeno = podijeli(12, 0)
console.log('rezultat dijeljenja: ' + dijeljeno)