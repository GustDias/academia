/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== ESCONDER MENU =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVER MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav--link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== MUDAR COR MENU ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*----------EMAIL JS-----------------*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    //checa se o campo tem valor
    if(contactUser.value === ''){
        //adiciona e remove cor
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //exibir mensagem
        contactMessage.textContent = 'Você deve colocar um email 👆'

        //tempo mensagem
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    } else{
        // service ID - template ID - #form - publickey
        emailjs.sendForm('','','#contact-form','')
            .then(() =>{
                //exibir mensagem e adiciona cor
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Seu registro está feito! 💪'

                //tempo mensagem
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 3000)
            })
    }
}

contactForm.addEventListener('submit', sendEmail)


/*---------------SCROLL REVEAL-----------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300
})

sr.reveal(`.home--data, .footer--container, .footer--group`)
sr.reveal(`.home--img`, {delay: 500, origin: 'bottom'})
sr.reveal(`.logos--img, .programa--card, .preco--card`, {interval: 50})
sr.reveal(`.escolha--img`, {origin: 'left'})
sr.reveal(`.escolha--conteudo`, {origin: 'right'})