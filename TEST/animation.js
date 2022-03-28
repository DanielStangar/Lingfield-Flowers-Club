const slogan = document.getElementById('slogan')

const sloganOne = "We promote the art of flower arranging as a way to making friends and learning new skills."
const sloganTwo = "Our aim is to help you design and construct your own flower arrangements."
const sloganThree = "Right now, you can send a bouquet to someone you love..."
const sloganFour = "or simply come to us and spend valuable time in good company."
const sloganFive = "Give us a call, write to us, come to say hi, anything that is comfortable for you."
const sloganSix = "We will be pleased to hear from you."



const imageLeft = document.getElementById('img-left')
const learnMore = document.getElementById('btn-learn-more')

const samples = document.getElementById('samples')
const membership = document.getElementById('membership')
const floristry = document.getElementById('floristry')
const contact = document.getElementById('contact')

const discover = document.getElementById('discover')
const send = document.getElementById('send')
const come = document.getElementById('come')

const lastSlogan = document.getElementById('last-slogan')

const stopBtn = document.getElementById('stop-btn');

const replayBtn = document.getElementById('replay-btn');




function promoMain(){

    setTimeout(stepOne, 500)
    setTimeout(stepTwo, 5000)
    setTimeout(stepThree, 8000)
    setTimeout(stepFour, 14000)
    setTimeout(stepFive, 18000)
    setTimeout(stepSix, 22000)
    setTimeout(stepSeven, 26000)
    setTimeout(stepEight,32000)
    setTimeout(stepNine,35000)
 


    function stepOne(){
        slogan.innerText = sloganOne  
        slogan.style.display='block'
        learnMore.style.display='block'
        slogan.style.animation = "appear 3s ease-in forwards"
        learnMore.style.animation = "appear 3s ease-in forwards"
        learnMore.style.color = '#af2304'
        learnMore.style.backgroundColor = '#f2d479'
        samples.style.backgroundColor = '#f2d479'
       samples.style.borderColor = '#af2304'
    }

    function stepTwo(){
        slogan.style.animation = 'disappear 3s ease-out forwards'
        
        learnMore.style.animation = 'disappear 3s ease-out forwards'
       samples.style.borderColor ='#210000'
        samples.style.backgroundColor ='#f8f7f4'
           
    }

    function stepThree(){
        learnMore.style.animation = 'colorChange 1s forwards'
        learnMore.style.color = '#af2304'
        learnMore.style.backgroundColor = '#f2d479'
        learnMore.style.animation = "appear 3s ease-in forwards"
        learnMore.href='membership.html'
        slogan.innerText = sloganTwo
        slogan.style.animation = "appear 3s ease-in forwards"
        membership.style.backgroundColor = '#f2d479'
        membership.style.borderColor = '#af2304'
        
        
        discover.style.textShadow = '5px 2px 20px grey'
        discover.style.borderColor = '#af2304'
        discover.style.color = '#af2304'
        discover.style.backgroundColor = '#f2d479'
        discover.style.backgroundImage='none'
       
       
    
        
        
    }

    function stepFour(){

       
        slogan.style.animation = 'disappear 3s ease-out forwards'
        learnMore.style.animation = 'disappear 3s ease-out forwards'
        membership.style.borderColor = '#210000'
        membership.style.backgroundColor = '#f8f7f4'
        discover.style.color='#210000'
        discover.style.backgroundColor = '#d9d4cc'
        discover.style.borderColor='grey'
        
        
    }

    function stepFive(){
        learnMore.style.color = '#af2304'
        learnMore.style.backgroundColor = '#f2d479'
        
        learnMore.href = 'floristry.html'
        slogan.innerText = sloganThree
        slogan.style.animation = "appear 3s ease-in forwards"
        learnMore.style.animation = "appear 3s ease-in forwards"
        floristry.style.backgroundColor = '#f2d479'
        floristry.style.borderColor = '#af2304'

        send.style.textShadow = '5px 2px 20px grey'
        send.style.borderColor = '#af2304'
        send.style.backgroundColor = '#f2d479'
        send.style.backgroundImage = 'none'
        

    }

    function stepSix(){
        
        slogan.style.animation = 'disappear 3s ease-out forwards'
        learnMore.style.animation = 'disappear 3s ease-out forwards'
        floristry.style.borderColor = '#210000'
        floristry.style.backgroundColor = '#f8f7f4'

        send.style.color = '#210000'
        send.style.borderColor = 'grey'
        send.style.backgroundColor = '#d9d4cc'

    }

    function stepSeven(){
        learnMore.style.color = '#af2304'
        learnMore.style.backgroundColor = '#f2d479'
        learnMore.href = 'contact.html'
        slogan.innerText = sloganFour
        slogan.style.animation = "appear 3s ease-in forwards"
        learnMore.style.animation = "appear 3s ease-in forwards"
        contact.style.backgroundColor = '#f2d479'
        contact.style.borderColor = '#af2304'

        come.style.textShadow = '5px 2px 20px grey'
        come.style.borderColor = '#af2304'
        come.style.color = '#af2304'
        come.style.backgroundColor = '#f2d479'
        come.style.backgroundImage = 'none'

    }

    function stepEight(){
      
        slogan.style.animation = 'disappear 3s ease-out forwards'
        learnMore.style.animation = 'disappear 3s ease-out forwards'
        contact.style.borderColor = '#210000'
        contact.style.backgroundColor = '#f8f7f4'

        come.style.color = '#210000'
        come.style.borderColor = 'grey'
        come.style.backgroundColor = '#d9d4cc'
    }

    function stepNine(){
        learnMore.style.color = '#210000'
        learnMore.style.backgroundColor = 'white'
        learnMore.href = 'contact.html'
        slogan.innerText = sloganFive
        slogan.style.animation = "appear 3s ease-in forwards"
        learnMore.style.animation = 'disappear 4s ease-out forwards'
        lastSlogan.innerText = sloganSix
        lastSlogan.style.animation ='appear 7s linear forwards'
       
    }    

}
promoMain()







    