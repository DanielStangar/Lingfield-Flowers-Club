const nav = document.querySelector('nav')
const lower = document.getElementById('lower')
const upper = document.getElementById('upper')
const footer = document.querySelector('footer')
const menuButton = document.getElementById('menu')

menuButton.addEventListener('click', displayMenu)


function displayMenu() {
    nav.style.display = 'flex';
    nav.style.animation = "appear 2s ease-in forwards"
    lower.style.display = 'none';
    upper.style.display = 'none'
    footer.style.display = 'none'
    menuButton.style.display = 'none';

}

