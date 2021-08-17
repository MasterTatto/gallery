const slides = document.querySelectorAll('.slide')
const window23 = document.querySelector('body')
for (const slide of slides) {
    slide.addEventListener('click', (e) => {
        e.stopPropagation()
        clearActiveClasse()
        cleareAllClasse()
        slide.classList.add('active');
    })
}

function clearActiveClasse() {
    slides.forEach((el) => {
        el.classList.remove('active');
    })
}

function cleareAllClasse() {

    window23.addEventListener('click', (e) => {

        slides.forEach((el) => {
            el.classList.remove('active');
        })
    })
}