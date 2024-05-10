var ul = document.querySelector("ul");
// jedan od načina je da UL elementu dodjelimo style "decimal"
// ul.style.listStyle = "decimal";

// drugi način je da iteriramo kroz Ul i svakom od LI elemanta promjenimo svojstvo na "decimal"
//debugger;
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
var bodyWindow = window.getComputedStyle(body, null);
// citamo pojedino svojstvo u slucaju "margin-left"
var marginBody = bodyWindow.getPropertyValue("margin"); 
console.log("marginBody" + marginBody);

var bckgColor = bodyWindow.getPropertyValue("background-color");
console.log("background-color: " + bckgColor);

// zadatak za doma -->
// animirajte veličinu margine body elementa
// od početne do 30 px i natrag u ponavljajućoj petlji
// debugger;

let marginNum = parseInt(marginBody); // 8px // 
console.log("marginNUm " + marginNum);

let interval = setInterval(animiraj, 200);
var reverse = false;
let numIterations = 1;
function animiraj(){ 
console.log("Pozvana funkcija animiraj(" + numIterations);
 if(marginNum == 30) {
    reverse = true;
 }
 if(reverse){
    marginNum--;
    console.log("<<<<<<<<<" + marginNum);
    if (marginNum == 8){
        reverse = false;
    }
 } else {
    marginNum++;
    console.log(">>>>>>>>> " + marginNum);
 }

 body.style.margin = marginNum + "px";
 numIterations++;
 if(numIterations == 40) {
    clearInterval(interval);
 }
}



