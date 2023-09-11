const sliderImages = document.querySelectorAll('.slider-img'),
    sliderLine = document.querySelector('.slider-line'),
    sliderDots = document.querySelectorAll('.pagination-itm');
    text = document.querySelectorAll('.meme-text');
    textLine = document.querySelector('.text-line')
         
let sliderCount = 0;

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
        sliderCount--;
    }

    rollSlider();
    thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = 0;
    } 

    rollSlider();
    thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * 110}%)`;
    textLine.style.transform = `translateX(${-sliderCount * 20}%)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active'));
    sliderDots[index].classList.add('active');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})