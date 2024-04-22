var arr = [
    'Ivana', 'Martina', 'Domagoj', 'Luka', 'Mihovil', 'Iva', 'Ivan', 'Martina',
];

var arrNum = [1, 2, 3, 4, 5, 6];

var arrCombo = [1, 'Ime', 2, 'Prezime'];

console.log('Niz ima ' + arr.length + 'elemanata');

var duljina = 0;
var minDuljina = 0;
var kratkoIme = '';
for (i = 0; i < arr.length; i++){
    console.log('Item'+ i + '=' + arr[i]);
    duljina = arr[i].length;
    console.log('Ime ' + arr[i] + 'sadrži ' + duljina + ' znakova');

    if (minDuljina == 0) {
        minDuljina = duljina;
        kratkoIme = arr[i];
    }

    if (duljina < minDuljina) {
        minDuljina = duljina;
        kratkoIme = arr[i];
    }
}

console.log('Ime sa najmanje znakova sadrži ' + minDuljina + ' znaka');

/*for(x=0; x< arr.length; x++){
    if(arr[x].length === minDuljina) {
        console.log(arr[x]);
        break;

    }
} */
