/*1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i oznčava ime psa.
defaultna vrijednost imena psa je "rex".
2. Kreirajte objekt iz Dog funkcije.
3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. pozovite ju iz novostvorenog objekta i ispišite rezultat.
*/
//1.
function Dog (name){
   // print("name=" + name);
    this.dogName = name || "Rex";  // one-liner
    /*if(name == undefined) {
        this.dogName = "Rex";
    } else {
        this.dogName = name;
    }*/
}
//2. --> defaultno ime psa ukoliko ne proslijedimo ime psa
var dog = new Dog();
print("Ime psa default name = " + dog.dogName);


// 2b --> ako proslijedimo ime psa
var dog1 = new Dog ("Loki");
print("ime psa = " + dog1.dogName);

// 3.

Dog.prototype.imePsa = function(){
    return this.dogName;

Dog.prototype.bark = function () {
    return "Wuf wuf";
}
};

print("Ime psa1 (dog1)preko metode= " + Object.dog.imePsa());
print("Ime psa2 (dog2) preko metode= " + Object.dog1.imePsa());

print("Pas1 (dog1) se glasa= " + dog.bark());
print("Pas2 (dog2) se glasa= " + dog1.bark());

function print(intext) {
    console.log(intext);
}

