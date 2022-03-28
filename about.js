
const container = document.querySelector('main');
const menuBtnAbout = document.getElementById('menuAbout')

const mobileNav = document.getElementById('second-nav-about')
const footer = document.querySelector('footer')
const subheading = document.getElementById('subheading-about')

menuBtnAbout.addEventListener('click', displayMembershipMenu)

function displayMembershipMenu() {
    container.style.display = 'none';
    mobileNav.style.display = 'flex'
    footer.style.display = 'none'
    subheading.style.display = 'none'

}