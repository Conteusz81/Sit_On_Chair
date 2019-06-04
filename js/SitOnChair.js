document.addEventListener('DOMContentLoaded', function () {

    showFirstSlide();
    slideLeftClick();
    slideRightClick();

});

let slidesEl = document.querySelectorAll('.slider img');
let slideLeftEl = document.querySelector('.sliderLeft');
let slideRightEl = document.querySelector('.sliderRight');
let counter = 0;

let hideAll = function () {
    slidesEl.forEach(el => {
        el.classList.add('hide_slide');
    })
};

let showFirstSlide = function () {
    hideAll();
    slidesEl[0].classList.toggle('hide_slide');
};

let slideLeft = function() {
    if (counter === 0) {
        counter = slidesEl.length;
    }
    hideAll();
    slidesEl[counter-1].classList.toggle('hide_slide');
    counter--;
};

let slideLeftClick = function () {
        slideLeftEl.addEventListener('click', function () {
            slideLeft();
        })

};

let slideRight = function () {
    if (counter === slidesEl.length -1) {
        counter = -1;
    }
    hideAll();
    slidesEl[counter+1].classList.toggle('hide_slide');
    counter++;
};


let slideRightClick = function () {
        slideRightEl.addEventListener('click', function (e) {
            slideRight();
        })
};

//setInterval(function () {
//    slideRight();
//},5000);