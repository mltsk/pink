let buttonMenu = document.querySelector('.main-nav__taggle');
let mainNav = document.querySelector('.main-nav');
buttonMenu.onclick = function() {

    if (mainNav.classList.contains('main-nav--close')) {
        mainNav.classList.remove('main-nav--close');
        mainNav.classList.add('main-nav--open');
    } else {
        mainNav.classList.add('main-nav--close');
        mainNav.classList.remove('main-nav--open');
    }
}

//слайдер отзывы

let reviews = document.querySelector('.reviews');
let sliderButtons = reviews.querySelectorAll('.slider__toggle');
let slides = document.querySelector('.reviews__wrapper');


sliderButtons[0].onclick = function() {
    slides.classList.remove('reviews__wrapper--second');
    slides.classList.remove('reviews__wrapper--third');
    sliderButtons[0].classList.add('slider__toggle--current');
    sliderButtons[1].classList.remove('slider__toggle--current');
    sliderButtons[2].classList.remove('slider__toggle--current');
}

sliderButtons[1].onclick = function() {
    slides.classList.add('reviews__wrapper--second');
    slides.classList.remove('reviews__wrapper--third');
    sliderButtons[1].classList.add('slider__toggle--current');
    sliderButtons[0].classList.remove('slider__toggle--current');
    sliderButtons[2].classList.remove('slider__toggle--current');
}

sliderButtons[2].onclick = function() {
    slides.classList.add('reviews__wrapper--third');
    slides.classList.remove('reviews__wrapper--second');
    sliderButtons[2].classList.add('slider__toggle--current');
    sliderButtons[1].classList.remove('slider__toggle--current');
    sliderButtons[0].classList.remove('slider__toggle--current');
}


//слайдер таблица тарифов

let price = document.querySelector('.price');
let sliderTableButtons = price.querySelectorAll('.slider__toggle');
let slidesTable = document.querySelector('.price__table');


sliderTableButtons[0].onclick = function() {
    slidesTable.classList.add('price__table--first');
    slidesTable.classList.remove('price__table--third');
    sliderTableButtons[0].classList.add('slider__toggle--current');
    sliderTableButtons[1].classList.remove('slider__toggle--current');
    sliderTableButtons[2].classList.remove('slider__toggle--current');
}

sliderTableButtons[1].onclick = function() {
    slidesTable.classList.remove('price__table--first');
    slidesTable.classList.remove('price__table--third');
    sliderTableButtons[1].classList.add('slider__toggle--current');
    sliderTableButtons[0].classList.remove('slider__toggle--current');
    sliderTableButtons[2].classList.remove('slider__toggle--current');
}

sliderTableButtons[2].onclick = function() {
    slidesTable.classList.add('price__table--third');
    slidesTable.classList.remove('price__table--first');
    sliderTableButtons[2].classList.add('slider__toggle--current');
    sliderTableButtons[1].classList.remove('slider__toggle--current');
    sliderTableButtons[0].classList.remove('slider__toggle--current');
}


// слайдер отзывы для пк

let buttonBack = document.querySelector('.reviews__button--back'),
    buttonNext = document.querySelector('.reviews__button--next');
    let left = +slides.style.left;

    if (left == 0) {
        buttonBack.style.opacity = '0.4';
        buttonBack.style.cursor = 'default';
        buttonBack.classList.add('reviews__button--not-hover');
    }

    reviews.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target == buttonNext && left > -1920) {
            left = left - 960;
            console.log(left);
            slides.style.left = left + 'px';
        }

        if (target && target == buttonBack && left < 0) {
            left = left + 960;
            console.log(left);
            slides.style.left = left + 'px';
            buttonNext.style.opacity = '0.4';
        }

        if (left == 0) {
            buttonBack.style.opacity = '0.4';
            buttonBack.style.cursor = 'default';
            buttonNext.style.opacity = '1';
            buttonBack.classList.add('reviews__button--not-hover');
        }

        
        if (left == -960) {
            buttonBack.style.opacity = '1';
            buttonNext.style.opacity = '1';
            buttonBack.classList.remove('reviews__button--not-hover');
            buttonNext.classList.remove('reviews__button--not-hover');
            buttonBack.style.cursor = 'pointer';
            buttonNext.style.cursor = 'pointer';
        }

        if (left == -1920) {
            buttonNext.style.opacity = '0.4';
            buttonNext.style.cursor = 'default';
            buttonBack.style.opacity = '1';
            buttonNext.classList.add('reviews__button--not-hover');
        }
    

    })