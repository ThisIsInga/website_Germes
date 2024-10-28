const images = document.querySelectorAll('.social-img');
let currentIndex = 0;

images[currentIndex].classList.add('active'); // Показываем первое изображение

document.getElementById('nextBtn').addEventListener('click', () => {
    images[currentIndex].classList.remove('active'); // Скрываем текущее изображение
    currentIndex = (currentIndex + 1) % images.length; // Переход к следующему
    images[currentIndex].classList.add('active'); // Показываем следующее изображение
});

document.getElementById('prevBtn').addEventListener('click', () => {
    images[currentIndex].classList.remove('active'); // Скрываем текущее изображение
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущему
    images[currentIndex].classList.add('active'); // Показываем предыдущее изображение
});
