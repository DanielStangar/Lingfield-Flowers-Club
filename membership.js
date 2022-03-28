

const container = document.querySelector('main');
const menuBtnMembership = document.getElementById('menuMembership')

const mobileNav = document.getElementById('second-nav-membership')
const footer = document.querySelector('footer')


menuBtnMembership.addEventListener('click', displayMembershipMenu)

function displayMembershipMenu() {
    container.style.display = 'none';
    mobileNav.style.display = 'flex'
    footer.style.display = 'none'
    

}