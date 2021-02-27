// Typewritter effect

const typewriter = () => {
    const text = ['WEB_DEVELOPER    ', 'UI/UX DESIGNER    '];
    let count = 0; //text_length
    let index = 0;
    let CurrentText = '';
    let letter = '';

    (function type() {
        if (count === text.length) {
            count = 0;
        }
        CurrentText = text[count];
        letter = CurrentText.slice(0, ++index);
        document.querySelector('.typing').textContent = letter;
        if (letter.length === CurrentText.length) {
            count++;
            index = 0;
        }
        setTimeout(type, 450);
    })();
};
typewriter();

// Image slider

const slider = () => {
    const slideList = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.prev-btn');
    const nextArrow = document.querySelector('.next-btn');

    const maxSlide = slideList.length - 1;
    let curSlide = 0;

    const goToSlide = (slide) => {
        slideList.forEach((el, i) => {
            el.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
    };

    const nextSlide = () => {
        if (curSlide == maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
        console.log(curSlide);
    };

    const prevSlide = () => {
        if (curSlide == maxSlide - maxSlide) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        console.log(curSlide);
    };

    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);
    console.log(slideList);
    goToSlide(curSlide);
};

slider();
