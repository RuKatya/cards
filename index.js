const slides = document.querySelectorAll('.slide')

const random = Math.floor(Math.random() * slides.length)
slides[random].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        cleaeActiveClasses()

        slide.classList.add('active')
    })
}

function cleaeActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}