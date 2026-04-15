let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCounter = document.getElementById('slideCounter');

function updateCounter() {
    if (slideCounter) {
        slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
    }
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateCounter();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Navegação por teclado (setas)
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Clique em qualquer lugar da tela avança (efeito apresentação)
document.addEventListener('click', function (e) {
    // Evita avançar se clicou diretamente nos botões (para não duplicar)
    if (e.target.tagName !== 'BUTTON' && !e.target.closest('.nav')) {
        nextSlide();
    }
});

// Inicializa
showSlide(0);