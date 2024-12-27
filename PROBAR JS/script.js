// Seleccionar la caja
const box = document.getElementById('box');
let position = 0; // Posición inicial
let direction = 1; // Dirección inicial (1 hacia derecha, -1 hacia izquierda)
const speed = 2; // Velocidad de la animación

function animate() {
  // Cambiar la posición de la caja
  position += speed * direction;

  // Actualizar la posición en el eje X
  box.style.transform = `translateX(${position}px)`;

  // Revertir dirección al llegar al borde
  if (position > window.innerWidth - 50 || position < 0) {
    direction *= -1;
  }

  // Continuar la animación
  requestAnimationFrame(animate);
}

// Iniciar la animación
animate();
