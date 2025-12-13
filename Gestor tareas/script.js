let input = document.getElementById("texto");
let estado = document.getElementById("estado");
let lista = document.getElementById("lista");
let btn = document.getElementById("agregar");

btn.onclick = function () {
    console.log("si funciona");
    
    if (input.value.trim() === "") return;

    let div = document.createElement("div");
    div.className = "tarea";
    if(estado.value === "Pendiente"){
        div.style.backgroundColor="blue";
    }else if (estado.value === "Proceso"){
        div.style.backgroundColor = "red";
    }else{
        div.style.backgroundColor="green";
    }
    div.innerHTML = input.value + 
        "<div class='estado'>Estado: " + estado.value + "</div>";

    lista.appendChild(div);

    input.value = "";
};
