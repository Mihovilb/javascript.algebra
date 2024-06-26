var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Ovo je tekst unutar h1"));

var bodyElem = document.querySelector("body");
console.log(bodyElem);
// bodyElem.prepend(h1)

var dDescr = document.querySelector(".description");
// console.log("dDescr--> " + dDescr);
dDescr.parentNode.prepend(h1);

// kreiramo novi objekt u memoriji div sa class atributom i vrijednosti info
// <div class ="info"></div>

var divInfo = document.createElement("div");
divInfo.classList.add("info");

// nalazimo element footer sa id=footer
// insertamo na body novi kreirano objekt i insertamo prije footer elementa

var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);

// trebamo naći <ul> element
var ul = document.querySelector("ul"); // dohvaćen iz DOM-a
//var li = document.createElement("li"); // kreiramo novi objekt u memoriji

console.log("UL ima Li elemenata: " + ul.childElementCount);

// debugger;
// prvi način brisanja elemenata iz UL
for( let i = ul.childElementCount; i > 0; i-- ) {
    let child = ul.children[i - 1];
    ul.removeChild(child);
}

// drugi način brisanja elemenata iz UL
while (ul.childElementCount > 0) {
    let child = ul.children[0];
    ul.removeChild(child);
}

for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
}

/*ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2); */

// var h2 = document.createElement("h2");
// h2.appendChild(document.createTextNode("Ovo je tekst unutar h2"));
// debugger;

// dDescr.parentNode.insertBefore(divInfo,dDescr.nextSibling);