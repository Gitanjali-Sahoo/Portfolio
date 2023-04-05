// let name = ' I am a Frontend developer'

// let i = 0
// let intervalId = setInterval(function () {
//     document.getElementById('name').textContent += name.charAt(i)
//     i++
//     if (i >= name.length) {
//         clearInterval(intervalId)
//     }
// }, 200)

const typed = new Typed('.multilple-title', {
    strings: [' a Frontend Developer', 'an UX/UI Designer', 'an App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

function sendEmail() {
    window.location = 'mailto:gr.sahoo15@gmail.com'
}

ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 })
ScrollReveal().reveal('.details, .heading ', { origin: 'top' })
ScrollReveal().reveal(
    '.images .shine-image, .container p, .bar-container,.portfolio .portfolio-box , .service-container .card,.contact-section',
    { origin: 'bottom' }
)
