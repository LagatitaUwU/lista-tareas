const input = document.getElementById("tareaInput");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
mostrarTareas();

boton.addEventListener("click", function(){

    let texto = input.value;

    if(texto === "") return;

    tareas.push(texto);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    input.value = "";

    mostrarTareas();
});

function mostrarTareas(){

    lista.innerHTML = "";

    tareas.forEach(function(tarea){

        let li = document.createElement("li");

        li.textContent = tarea;

        lista.appendChild(li);

    });

}
