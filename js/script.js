function updateClock() {
    const startTime = new Date('2022-04-21T00:00:00'); // Data de início do contador
    const now = new Date();
    const elapsedTime = now - startTime;
    
    const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('years').innerText = String(years).padStart(2, '0');
    document.getElementById('months').innerText = String(months).padStart(2, '0');
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
updateClock(); // Chamada inicial para evitar o atraso do primeiro segundo

let currentIndex = 0;

function moveSlide(direction) {
    const imagesContainer = document.querySelector('.carousel-images');
    const totalImages = imagesContainer.children.length;
    const imageWidth = imagesContainer.children[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Função para criar partículas de glitter aleatórias
function createGlitter() {
    const glitterContainer = document.querySelector('.glitter');
    const numberOfGlitters = 100; // Número de partículas de glitter

    for (let i = 0; i < numberOfGlitters; i++) {
        const glitter = document.createElement('span');
        glitter.style.top = `${Math.random() * 100}vh`; // posição aleatória na altura
        glitter.style.left = `${Math.random() * 100}vw`; // posição aleatória na largura
        glitter.style.animationDelay = `${Math.random() * 2}s`; // atraso aleatório para animação
        glitter.style.animationDuration = `${Math.random() * 2 + 1}s`; // duração aleatória da animação
        glitterContainer.appendChild(glitter);
    }
}

createGlitter();
