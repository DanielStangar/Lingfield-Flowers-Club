//closes the main part and opens CONTACT FORM

const container = document.getElementById('contact-form')
const contactForm = document.getElementById('contact-form')
const form = document.getElementById('form')
const button = document.getElementById('button')
const meeting = document.getElementById('meeting')

button.addEventListener('click', displayForm)

function displayForm() {
    console.log('clicked')
    //meeting.style.animation = 'fade 2s ease-out forwards'
    meeting.style.display='none'
    form.style.display = 'block'
    contactForm.style.display ='block'
    form.style.animation = "spin1 2s ease-out forwards"
    container.style.animation ='spin1 2s ease-out forwards'
}




//using MENU button displaying NAV and making the main part disappear, only for smart phones
const main = document.getElementById('container');
const menuBtnContact = document.getElementById('menuContact')

const mobileNav = document.getElementById('second-nav-contact')
const footer = document.querySelector('footer')
const subheading = document.getElementById('subheading-contact')

menuBtnContact.addEventListener('click', displayContactMenu)

function displayContactMenu() {
    main.style.display = 'none';
    mobileNav.style.display = 'flex'
    footer.style.display = 'none'
    subheading.style.display = 'none'

}

