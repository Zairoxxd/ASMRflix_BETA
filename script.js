// Función para navegar suavemente entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Obtiene el destino al que se hace referencia
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Realiza el scroll suave hacia el destino
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Función para mostrar un mensaje emergente (opcional, solo ejemplo)
function showPopupMessage(message) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = message;

  // Añadir al body
  document.body.appendChild(popup);

  // Remover el mensaje después de 3 segundos
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

// Ejemplo de uso: Mostrar mensaje emergente al cargar la página
window.onload = () => {
  showPopupMessage('¡Bienvenido a SCP: Resurrection! Explora el mundo de SCP ahora.');
};
