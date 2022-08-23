//const test =document.getElementById('text');
const menuBtnFloristry = document.getElementById('menuFloristry')

const mobileNav = document.getElementById('second-nav-floristry')
const footer = document.querySelector('footer')
const main = document.getElementById('main')

menuBtnFloristry.addEventListener('click', displayFloristryMenu)

function displayFloristryMenu(){
  //  test.style.display='none';
    mobileNav.style.display='flex'
    footer.style.display='none'
    main.style.display='none'
}


//displaying full text for event overviews
const btnLevel1 = document.getElementById('btn-level1')
const btnLevel2 = document.getElementById('btn-level2')
const btnLevel3 =document.getElementById('btn-level3')
const textLevel2 = document.getElementById('text-level2')
const textLevel3 = document.getElementById('text-level3')
const textLevel1 = document.getElementById('text-level1')
const overview = document.getElementById('overview')
const reloadBtn1 = document.getElementById('reloadBtn')
const textLevel4 = document.getElementById('text-level4')
const btnLevel4= document.getElementById('btn-level4')

btnLevel1.addEventListener('click', () =>{
    textLevel1.style.display ='block'
    reloadBtn1.style.display='block'
    textLevel1.style.animation="appear 1.25s ease-in forwards"
    textLevel2.style.display='none'
    textLevel3.style.display ='none'
    textLevel4.style.display='none'
    //overview1.style.backgroundColor='#f8f7f4'
    if (window.matchMedia("(max-width:450px)").matches){
    overview.style.display ='none'}
    if (window.matchMedia("(max-width:1100px)").matches){
    overview.style.display ='none'} 
})

btnLevel2.addEventListener('click', () =>{
    textLevel2.style.display="block"
    textLevel1.style.display='none'
   
    textLevel2.style.animation="appear 1.25s ease-in forwards"
    textLevel3.style.display ='none'
    textLevel4.style.display='none'
    if (window.matchMedia("(max-width:450px)").matches){
        overview.style.display ='none'}
    if (window.matchMedia("(max-width:1100px)").matches){
        overview.style.display ='none'} 
})


btnLevel3.addEventListener('click',() => {
    textLevel1.style.display ='none'
    textLevel2.style.display='none'
    textLevel3.style.display='block'
    textLevel3.style.animation="appear 1.25s ease-in forwards"
    textLevel4.style.display='none' 
    if (window.matchMedia("(max-width:450px)").matches){
        overview.style.display ='none'}   
    if (window.matchMedia("(max-width:1100px)").matches){
        overview.style.display ='none'} 
})


btnLevel4.addEventListener('click',() => {
    textLevel1.style.display ='none'
    textLevel2.style.display='none'
    textLevel3.style.display ='none'
    textLevel4.style.display='block'
    textLevel4.style.animation="appear 1.25s ease-in forwards" 
    if (window.matchMedia("(max-width:450px)").matches){
        overview.style.display ='none'}   
    if (window.matchMedia("(max-width:1100px)").matches){
        overview.style.display ='none'} 
})

