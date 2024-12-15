// método para cambiar de color el botón 'Acceder' al hacerle click. 
const image = document.querySelector('.image1');
document.getElementById('bt').addEventListener('click', () => {
    image.style.transition = 'transform 1s';
    image.style.transform = 'translateX(300px)';
}); 

// método para hacer visible el elemento '.container'.
document.addEventListener('DOMContentLoaded', function() {
    const elemento = document.getElementById('container1');
    elemento.style.opacity = 1; // Cambia la opacidad a 1 al cargar la página
});

document.getElementById("loginForm").addEventListener("submit", function() {
    document.getElementById("fUsuario").blur(); // Quita el enfoque del campo
}); 



