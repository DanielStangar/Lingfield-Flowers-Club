// pictureList = ['images/pict3.jpg', 'images/pict4.jpg', 'images/pict5.jpg',
//     'images/pict6.jpg', 'images/pict7.jpg', 'images/pict8.jpg', 'images/pict9.jpg', 'images/pict10.jpg', 'images/pict11.jpg', 'images/pict12.jpg',
//     'images/pict13.jpg', 'images/pict14.jpg', 'images/pict15.jpg', 'images/vase.jpeg']

//     const mainPic = document.getElementById('main-pic')
//     //mainPic.src = 'images/pict14.jpg'

const container = document.getElementById('container');
const menuBtnSamples = document.getElementById('menuSamples')

const mobileNav = document.getElementById('second-nav-samples')
const footer = document.querySelector('footer')
const subheading = document.getElementById('subheading-samples')

menuBtnSamples.addEventListener('click', displaySamplesMenu)

function displaySamplesMenu() {
    container.style.display = 'none';
    mobileNav.style.display = 'flex'
    footer.style.display = 'none'
    subheading.style.display='none'

}
//const workshopsBtn = document.getElementById('workshops-btn')
//workshopsBtn.addEventListener('click', scrollToWorkshops)
//const element = document.getElementById('sectionThree')

//function scrollToWorkshops(){
 //   element.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'}}