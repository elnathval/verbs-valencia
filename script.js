var text;
var files = [];
var filaActual = [];
// Amb fetch si el tens en un servidor






function randomWord() {
    filaActual = files[Math.floor(Math.random() * files.length)];
    if(document.getElementById(filaActual[2]).checked) {
        if((filaActual[2] === "infinitiu" || filaActual[2] === "gerundi") || document.getElementById(filaActual[3]).checked) {
        document.getElementById("paraula").textContent = filaActual[7];
        } else {
            randomWord();
        }
    } else {
        randomWord();
    }
}

const res = fetch('verbs_valencians_pau_valencia.csv').then(response => response.text()).then(data => {
  //console.log(data);
  text = data;
  files = text.split("\n").slice(1).map(line => line.split(","));
  filaActual = files[Math.floor(Math.random() * files.length)];
  document.getElementById("paraula").textContent = filaActual[7];  
});


function comprovar() {
    var temps = document.getElementById("temps").value;
    var conjugacio = document.getElementById("conjugacio").value;
    var persona = document.getElementById("persona").value;
    var nombre = document.getElementById("nombre").value;
    var mode = document.getElementById("mode").value;

    console.log(temps, conjugacio, persona, nombre, mode);
    console.log(filaActual[3], filaActual[1], filaActual[4], filaActual[5], filaActual[2]);

    if(filaActual[2] === "infinitiu" || filaActual[2] === "gerundi") {
        if(mode === filaActual[2] && conjugacio === filaActual[1]){
            document.getElementById("resposta").textContent = "Correcte!";
        }
        else {
            document.getElementById("resposta").textContent = `Incorrecte! El verb complet és: ${filaActual[1]} conjugació, ${filaActual[2]}`;
            return;
        }
    }
    else if(filaActual[2] === "participi") {
        if(mode === filaActual[2] && conjugacio === filaActual[1] && nombre  === filaActual[5]){
            document.getElementById("resposta").textContent = "Correcte!";
        }
        else {
            document.getElementById("resposta").textContent = `Incorrecte! El verb complet és: ${filaActual[1]} conjugació, ${filaActual[2]}, ${filaActual[5]}`;
            return;
        }
    }
    else if(filaActual[2] === "imperatiu") {
        if(mode === filaActual[2] && conjugacio === filaActual[1] && persona === filaActual[4] && nombre === filaActual[5]){
            document.getElementById("resposta").textContent = "Correcte!";
        }
        else {
            document.getElementById("resposta").textContent = `Incorrecte! El verb complet és: ${filaActual[1]} conjugació, ${filaActual[2]}, ${filaActual[4]} persona, ${filaActual[5]}`;
            return;
        }
    }
    else {
        if(mode === filaActual[2] && conjugacio === filaActual[1] && temps === filaActual[3] && persona === filaActual[4] && nombre === filaActual[5]){
            document.getElementById("resposta").textContent = "Correcte!";
        }
        else {
            document.getElementById("resposta").textContent = `Incorrecte! El verb complet és: ${filaActual[1]} conjugació, ${filaActual[3]} del ${filaActual[2]}, ${filaActual[4]} persona, ${filaActual[5]} `;
            return;
        }
    }

    randomWord(); 
}

function seguent() {
    randomWord();
    document.getElementById("resposta").textContent = "Següent...";
}

