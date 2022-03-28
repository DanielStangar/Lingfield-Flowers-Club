const test =document.getElementById('text');
const menuBtnFloristry = document.getElementById('menuFloristry')

const mobileNav = document.getElementById('second-nav-floristry')
const footer = document.querySelector('footer')
const main = document.getElementById('main')

menuBtnFloristry.addEventListener('click', displayFloristryMenu)

function displayFloristryMenu(){
    test.style.display='none';
    mobileNav.style.display='flex'
    footer.style.display='none'
    main.style.display='none'
}