var auto = {
    boja: "crna",
    marka: { tip : 'BMW', model: "ff30"},
    cijena: 220000,
    brzina: 10,
    maxBrzina: 220,
    registriran: true,
    ubrzaj: function (vrijeme) {
        let tmpVrijeme = 1;
        while (this.brzina < this.maxBrzina) {
           this.brzina = this.brzina + 5;
           if(tmpVrijeme == vrijeme) {
            break;
            } 
            tmpVrijeme++;
        }
        return this.brzina;
    },

    zakoci : function (vrijeme) {
        while(this.brzina >=0){
            //smanjujemo brzinu
            this.brzina = this.brzina - 20;
          vrijeme--;
          if(vrijeme ==0 || this.brzina == 0){
            break;
          }
        }
        return vrijeme / 5;
    },

promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
},
};
console.log("auto JSON--> " + JSON.stringify(auto));

console.log("Početna brzina: " + auto.brzina); // 10
console.log("Auto ce ubrzati na: " + auto.ubrzaj(2));  // 20 (jer tmpVrijeme ide od 0)
console.log("Brzina nakon ubrzanja: " + auto.brzina);   // 25

console.log("Auto će ubrzati nakon 41sec na: " + auto.ubrzaj(41)); // 220

console.log(auto.zakoci(11));

console.log("Trenutna boja auta je: " + auto.boja + ", a nakon promjene boje je " + auto.promijeniBoju("crvena"));


console.log(auto.boja); //crvena
auto["boja"] = "Žuta";
console.log(auto.boja);

for (kljuc in auto) {
    let tmpKljuc = auto[kljuc];
   // console.log("----> provjeravamo " + tmpKljuc);

    if (typeof tmpKljuc == "number"){
        console.log(kljuc + " : " + tmpKljuc);
    }

   /* if (auto.propertyIsEnumerable(kljuc)){
        console.log(Kljuc + " : " + tmpKljuc)
    console.log(tmpKljuc);
   }*/
}

var mydate = new Date (-100000000000);
console.log(mydate);

var mydate2 = new Date();
console.log(mydate2);