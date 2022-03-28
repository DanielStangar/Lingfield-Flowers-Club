// const flower = document.getElementById('p4')
// flower.src="images/vase.jpeg"


// const pictureList = ['images/pict3.jpg', 'images/pict4.jpg', 
// 'images/pict6.jpg', 'images/pict7.jpg', 'images/pict8.jpg','/images/pict9.jpg','pict10.jpg', 'pict11.jpg', 'pict12.jpg', 
//     'images/pict13.jpg', 'images/pict14.jpg', 'images/pict15.jpg', 'images/pict7.jpg']


//     pictureList.forEach(changePicture); 
    
//     function changePicture(item) {
//         const timeout = setTimeout(function() {        
//             flower.src = item
//             document.body.appendChild(flower)
//         },5000)
//     }


const sloganOne = "Our work has to do with beauty and people like what we do."
const sloganTwo = "You can learn with us to make amazing bunches of flowers."
const sloganThree = "Right now, you can send a bouquet to someone you love..."
const sloganFour = "or simply come to us and spend valuable time in a good company."
const sloganFive = "In every case, we are glad to have you here!"



const promoOne = document.getElementById('promo-text-1')
const promoTwo = document.getElementById('promo-text-2')
const promoThree = document.getElementById('promo-text-3')
const promoFour = document.getElementById('promo-text-4')
const promoFive = document.getElementById('promo-text-5')
const background = document.getElementById('discover')

const samples = document.getElementById('samples')
const membership = document.getElementById('membership')
const floristry = document.getElementById('floristry')
const contact = document.getElementById('contact')



function changeSlogan(){
    promoOne.innerText = sloganOne
    promoTwo.innerText = sloganTwo
    promoThree.innerText = sloganThree
    promoFour.innerText = sloganFour
    promoFive.innerText = sloganFive
    setTimeout(changeOne, 500)
    setTimeout(changeTwo, 7000)
    setTimeout(changeThree, 12000)
    setTimeout(changeFour,17000)
    setTimeout(changeFive,22000)
    setTimeout(promoEnd,30000)

    function changeOne(){
        promoOne.style.display = 'block'
        promoOne.style.animation = "appear 3s ease-in forwards"
        background.style.display='block'
        background.style.animation = "w-background 5s ease-in forwards"
        samples.style.color = "#af2304"
        samples.style.opacity= '1'
        
         }
    
    function changeTwo(){
     
       
       
        promoTwo.style.display = 'block'
        promoTwo.style.animation = "appear 5s ease-in forwards"
        samples.style.color = "#210000"
        samples.style.opacity = '0.85'

        membership.style.color = '#af2304'
        membership.style.opacity= '1'
    
    }

    function changeThree() {
        
       // promoTwo.style.animation = 'disappear 3s ease-out forwards'
        //promoTwo.remove()
        promoThree.style.display = 'block'
        promoThree.style.animation = "appear 5s ease-in forwards"
        membership.style.color = "#210000"
        membership.style.opacity = '0.85'

        floristry.style.color = '#af2304'
        floristry.style.opacity = '1'

    }

    function changeFour() {
        promoFour.style.display = 'block'
        promoFour.style.animation = "appear 5s ease-in forwards"

        floristry.style.color = "#210000"
        floristry.style.opacity = '0.85'

        contact.style.color = '#af2304'
        contact.style.opacity = '1'

    }

    function changeFive() {
        promoFive.style.display = 'block'
        promoFive.style.color = "#210000"
        promoFive.style.fontWeight = '500'
       
        promoFive.style.animation = "appear 7s ease-in forwards"
        promoFive.style.animation = 'biggerFont 5s ease-in forwards'

        contact.style.color = "#210000"
        contact.style.opacity = '0.85'
        promoOne.style.animation = 'disappear 5s ease-out forwards'
        promoTwo.style.animation = 'disappear 5s ease-out forwards'
       promoThree.style.animation = 'disappear 5s ease-out forwards'
       promoFour.style.animation = 'disappear 5s ease-out forwards'

    }

    function promoEnd(){
        background.style.animation ='disappear 8s ease-out forwards'
        //background.style.display = 'none';
        background.remove()
    }
    

}
changeSlogan()









