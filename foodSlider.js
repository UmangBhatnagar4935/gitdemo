const icons = document.querySelectorAll('.section-1-icons i');
let counter = 1;
const totalIcons = icons.length;
setInterval(() => {
    const egg = document.querySelector('.section-1-icons i.change');
    if (counter < totalIcons) {
        egg.nextElementSibling.classList.add('change');
        egg.classList.remove('change');
    }
    else {
        egg.classList.remove('change');
        icons[0].classList.add('change');
        counter = 0;
    }
    ++counter;

}, 990);