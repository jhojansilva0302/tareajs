
const inputTarea = document.getElementById('inputTarea');
const agregarBtn = document.getElementById('agregarBtn');
const listaDeTareas = document.getElementById('listaDeTareas');

agregarBtn.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === '') {
        alert("¡Alerta! El campo de tarea no puede estar vacío.");
        return; 
    }

    const listItem = document.createElement('li');
    listItem.className = 'tarea-item'; 
    listItem.textContent = textoTarea;

    
    const botonEliminar = document.createElement('button');
    botonEliminar.className = 'eliminar-btn';
    botonEliminar.textContent = 'X';

    
    botonEliminar.addEventListener('click', function(e) {
       
        e.stopPropagation(); 
       
        listItem.remove(); 
    });

    
    listItem.addEventListener('click', function() {
       
        listItem.classList.toggle('completada');
    });

   
    listItem.appendChild(botonEliminar); 
    listaDeTareas.appendChild(listItem); 

    inputTarea.value = '';
}