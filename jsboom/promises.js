/* 1. napišite Promi čeka funkciju getX,
i na resolved reagira sa console.lg-om vrijednosti vraćene vrijednosti,
a na reject reagira sa console.log-om stringa "Oh no!"

2. Ako već niste, prepišite sve funkcije u arrow funckije. */

/*function getX() {
    return Math.random() >= 0.5;
} */

const getX = () => Math.random() >= 0.5;

let ispisi = new Promise( (resolve, reject) => {
    console.log("pozvan promise object");
    let x = getX();
    console.log("x="+ x);
    if(x) {
        return setTimeout(() => resolve(x), 1000);
    }

    return setTimeout (reject, 1000);
})
    .then(console.log((vrijednost) => "neka vrijednost" + vrijednost))
    .catch(() => console.log("Oh no!"));