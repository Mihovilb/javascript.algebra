let inputIme = document.getElementById("Ime");
let inputPrezime = document.getElementById("Prezime");
let inputEmail = document.getElementById("Email")

let buttonSend = document.getElementById("posalji");
let buttonReset = document.getElementById("reset")

// funkcije za focus in/out za polje ime i prezime
function fokusIn(e) {
    e.target.style.backgroundColor = "yellow";    
}
function fokusOut(e) {
    e.target.style.backgroundColor = "lightgrey";
    if(e.target.value == "") e.target.style.backgroundColor = "red";
}

// funckije za focus in/out za polje email
function fokusOutEmail(e) {
    e.target.style.backgroundColor = "lightgrey";
    if (e.target.value.indexOf("@") < 0) {
        e.target.style.backgroundColor = "red";
    }
}

function buttonSend() {
    if(inputEmail.value.indexOf("@") < 0) {
        alert("Email je neispravan, ne sadrži @ znak");
        inputEmail.style.backgroundColor = "red";
    }
}

function sendClick() {
    const myArr = inputEmail.value.split("");
    let atCharExists = false;
    for (let i = 0; i < inputEmail.value.length; i++){
        if (myArr[i] === "@") {
            atCharExists = true;
            break;
        }
        if(!atCharExists) {
            alert ("email je neispravan, ne sadrži @ znak");
            inputEmail.style.backgroundColor ="red";
        }
    }

}

function resetClick(){
    let yesNo = confirm(" želite li resetirati sva polja");
    console.log("Yes/No = " +yesNo);
    if (yesNo){
        inputIme.value="";
        inputIme.style.backgroundColor = "white";
        inputPrezime.value ="";
        inputPrezime.style.backgroundColor = "white";
        inputEmail.value ="";
        inputEmail.style.backgroundColor = "white";
    }
}

inputIme.addEventListener("fokus", fokusIn);
inputIme.addEventListener("blur", fokusOut);
inputPrezime.addEventListener("fokus", fokusIn);
inputPrezime.addEventListener("blur", fokusOut);
inputEmail.addEventListener("fokus", fokusIn)
inputEmail.addEventListener("blur", fokusOutEmail);

buttonSend.addEventListener("click", resetClick)
buttonReset.addEventListener("click", resetClick);
