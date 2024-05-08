var ul = document.querySelector("ul");
// jedan od načina je da UL elementu dodjelimo style "decimal"
// ul.style.listStyle = "decimal";

// drugi način je da iteriramo kroz Ul i svakom od LI elemanta promjenimo svojstvo na "decimal"
debugger;
var i = 1;
for (let elem of ul.children) {
    elem.style.listStyle = "decimal";
    //elem.textContent = i + ". " + elem.textContent;
    i++;
}
// nadji div sa klasom "Info"
var divInfo = document.querySelector(".info");
// na div-u sa klasom "info" dodaj novu klasu "sakrij" koju smo definirali u css-u
divInfo.classList.add("sakrij");

var body = document.querySelector("body");
// dohvacamo primjenjne styles na body objektu
var marginBody = window.getComputedStyle(body, null);
// citamo pojedino svojstvo u slucaju "margin-left"
var bodyWindow = window.getComputedStyle("margin-left"); 
console.log("marginBody" + marginBody);

