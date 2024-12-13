// Frases personalizadas para ti
const phrases = [
    "Niña linda hermosa preciosa :3❤️",
    "Mi amor por ti no tiene límites :3❤️",
    "Tú eres mi razón de ser mi niña linda :3❤️",
    "El mejor día de mi vida fue cuando te conocí :3❤️",
    "No puedo esperar para pasar el resto de mi vida contigo :3❤️❤️",
    "Eres perfecta, te quiero cojer ;3",
    "Te amo Sarahi :3❤️❤️❤️",
    "Te llevo en mi corazón, dondequiera que esté :3❤️",
    "Cada mensaje, cada llamada, me hace sentir especial :3❤️",
    "Aunque no pueda verte ahora, sé que luces hermosa :3❤️",
    "Te voy a cojer un día ;3 digo... te amo mucho :3❤️"
];

// Función para mostrar una frase aleatoria
function showRandomPhrase() {
    const phraseElement = document.getElementById("phrase");
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.innerHTML = phrases[randomIndex];
}

// Cambiar frase cada 5 segundos
setInterval(showRandomPhrase, 5000);

// Función para crear los corazones
function createHeart() {
    const heart = document.createElement("div");
    heart.style.position = "absolute";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.color = "red";
    heart.innerHTML = "❤️";
    
    // Añadir el corazón al body
    document.body.appendChild(heart);
    
    // Animar el corazón para que suba
    let moveUp = setInterval(() => {
        let top = parseFloat(window.getComputedStyle(heart).top);
        let left = parseFloat(window.getComputedStyle(heart).left);
        
        if (top < -10) {
            clearInterval(moveUp);
            document.body.removeChild(heart);  // Eliminar el corazón cuando salga de la pantalla
        } else {
            heart.style.top = top - 1 + "%";
            heart.style.left = left + Math.random() * 0.5 - 0.25 + "%"; // Mover los corazones un poco hacia los lados
        }
    }, 20);
}

// Mostrar corazones de manera constante
setInterval(createHeart, 500);

// Función para mostrar las imágenes en un slider
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambiar imagen cada 3 segundos
}

// Iniciar el slider
showSlides();
