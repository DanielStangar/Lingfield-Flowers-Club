

//controling menu button and nav bar on mobile phone version
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

//displaying group of images by pressing buttons in Classes of images
const competition = document.getElementById('competition')
const competitionBtn= document.getElementById('competitionBtn')
const defaultPics = document.getElementById('default-pics')
competitionBtn.addEventListener('click', () => {
    competition.style.display="flex"
    stylesOfDesign.style.display='none'
    competitionBtn.style.backgroundColor='#f2d479'
    competitionBtn.style.color='#af2304'
    defaultPics.style.display="none"
    workshops.style.display="none"
    events.style.display="none"
    seasonal.style.display="none"

    stylesOfDesignBtn.style.color='#210000'
    stylesOfDesignBtn.style.backgroundColor='#f8f7f4'
    workshopsBtn.style.color='#210000'
    workshopsBtn.style.backgroundColor='#f8f7f4'
    seasonalBtn.style.color='#210000'
    seasonalBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.color='#210000'
    demoBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.color='#210000'
    eventsBtn.style.backgroundColor='#f8f7f4'
    eventsBtn.style.color='#210000'
})

const stylesOfDesign = document.getElementById('styles-of-design')
const stylesOfDesignBtn = document.getElementById('stylesOfDesignBtn')
stylesOfDesignBtn.addEventListener('click', () => { 
    stylesOfDesign.style.display="flex"
    defaultPics.style.display="none"
    competition.style.display="none"
    events.style.display="none"
    workshops.style.display="none"
    stylesOfDesignBtn.style.backgroundColor='#f2d479'
    stylesOfDesignBtn.style.color='#af2304'
    competitionBtn.style.color='#210000'
    competitionBtn.style.backgroundColor='#f8f7f4'

    workshopsBtn.style.color='#210000'
    workshopsBtn.style.backgroundColor='#f8f7f4'
    seasonalBtn.style.color='#210000'
    seasonalBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.color='#210000'
    demoBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.color='#210000'
    eventsBtn.style.backgroundColor='#f8f7f4'
    eventsBtn.style.color='#210000'
})

const workshops = document.getElementById('workshops')
const workshopsBtn = document.getElementById('workshopsBtn')
workshopsBtn.addEventListener('click', () => {
    workshops.style.display="flex"
    defaultPics.style.display="none"
    competition.style.display="none"
    stylesOfDesign.style.display="none"
    events.style.display="none"
    workshopsBtn.style.backgroundColor='#f2d479'
    workshopsBtn.style.color='#af2304'

    stylesOfDesignBtn.style.backgroundColor='#f8f7f4'
    stylesOfDesignBtn.style.color='#210000'
    competitionBtn.style.color='#210000'
    competitionBtn.style.backgroundColor='#f8f7f4'
    seasonalBtn.style.color='#210000'
    seasonalBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.color='#210000'
    demoBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.color='#210000'
    eventsBtn.style.backgroundColor='#f8f7f4'
    eventsBtn.style.color='#210000'
   
})


const seasonal = document.getElementById('seasonal')
const seasonalBtn = document.getElementById('seasonalBtn')
seasonalBtn.addEventListener('click', () => {
    seasonal.style.display="flex"
    defaultPics.style.display="none"
    competition.style.display="none"
    stylesOfDesign.style.display="none"
    workshops.style.display="none"
    events.style.display="none"

    seasonalBtn.style.backgroundColor='#f2d479'
    seasonalBtn.style.color='#af2304'

    stylesOfDesignBtn.style.backgroundColor='#f8f7f4'
    stylesOfDesignBtn.style.color='#210000'
    competitionBtn.style.color='#210000'
    competitionBtn.style.backgroundColor='#f8f7f4'

    workshopsBtn.style.color='#210000'
    workshopsBtn.style.backgroundColor='#f8f7f4'

    designIdeasBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.color='#210000'
    demoBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.color='#210000'
    eventsBtn.style.backgroundColor='#f8f7f4'
    eventsBtn.style.color='#210000'
   
})

const designIdeas = document.getElementById('ideas')
const designIdeasBtn = document.getElementById('ideasBtn')
designIdeasBtn.addEventListener('click', () => {
    designIdeas.style.display="flex"
    seasonal.style.display="none"
    defaultPics.style.display="none"
    competition.style.display="none"
    stylesOfDesign.style.display="none"
    workshops.style.display="none"
    events.style.display="none"

    designIdeasBtn.style.backgroundColor='#f2d479'
    designIdeasBtn.style.color='#af2304'

    seasonalBtn.style.backgroundColor='#f8f7f4'
    seasonalBtn.style.color='#210000'
    stylesOfDesignBtn.style.backgroundColor='#f8f7f4'
    stylesOfDesignBtn.style.color='#210000'
    competitionBtn.style.color='#210000'
    competitionBtn.style.backgroundColor='#f8f7f4'
    workshopsBtn.style.color='#210000'
    workshopsBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.color='#210000'
    eventsBtn.style.backgroundColor='#f8f7f4'
    eventsBtn.style.color='#210000'
   
})


const demo = document.getElementById('demonstrations')
const demoBtn = document.getElementById('demoBtn')
demoBtn.addEventListener('click', () => { 
    demo.style.display="flex"
    designIdeas.style.display="none"
    defaultPics.style.display="none"
    competition.style.display="none"
    stylesOfDesign.style.display="none"
    workshops.style.display="none"
    seasonal.style.display="none"
    events.style.display="none"

    demoBtn.style.backgroundColor='#f2d479'
    demoBtn.style.color='#af2304'
    
    competitionBtn.style.color='#210000'
    competitionBtn.style.backgroundColor='#f8f7f4'
    stylesOfDesignBtn.style.color='#210000'
    stylesOfDesignBtn.style.backgroundColor='#f8f7f4'
    workshopsBtn.style.color='#210000'
    workshopsBtn.style.backgroundColor='#f8f7f4'
    seasonalBtn.style.color='#210000'
    seasonalBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.color='#210000'
    eventsBtn.style.backgroundColor='#f8f7f4'
    eventsBtn.style.color='#210000'
   
})

const events = document.getElementById('events')
const eventsBtn =document.getElementById('eventsBtn')
eventsBtn.addEventListener('click', () => {
    events.style.display='flex'
    demo.style.display="none"
    designIdeas.style.display="none"
    defaultPics.style.display="none"
    competition.style.display="none"
    stylesOfDesign.style.display="none"
    workshops.style.display="none"
    seasonal.style.display="none"

    eventsBtn.style.backgroundColor='#f2d479'
    eventsBtn.style.color='#af2304'
    
    competitionBtn.style.color='#210000'
    competitionBtn.style.backgroundColor='#f8f7f4'
    stylesOfDesignBtn.style.color='#210000'
    stylesOfDesignBtn.style.backgroundColor='#f8f7f4'
    workshopsBtn.style.color='#210000'
    workshopsBtn.style.backgroundColor='#f8f7f4'
    seasonalBtn.style.color='#210000'
    seasonalBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.backgroundColor='#f8f7f4'
    designIdeasBtn.style.color='#210000'
    demoBtn.style.backgroundColor='#f8f7f4'
    demoBtn.style.color='#210000'
})

let captions = [
    {id:'comp1',
    caption: 'Foliage Design Barbados'},

    {id:'comp2',
    caption: 'World Show Barbados, Commended (detail)'},

    {id:'comp3',
caption: 'Sizzling Hot'},

{id:'comp4',
caption: 'Competition in Chelsea 2019'},

{id:'comp5',
caption: 'Competition for green energy white cane'},

{id:'comp6',
caption: 'Creative design for competition'},

{id:'comp7',
caption: 'Best in Show Canada Exhibition'},

{id:'comp8',
caption: 'Silver Gilt Chelsea'},

{id:'comp9',
caption: 'Runner Up Designer of the year Islington'},


{id: 'comp10',
caption: 'Designer of the year'},

{id: 'comp11',
caption: 'Gold Chelsea Flower Show'},

{id: 'comp12',
caption: 'Chelsea 2019'},

{id: 'comp13',
caption: 'Club designs Wisley'},

{id: 'comp14',
caption: 'Change of tack Runner up Best in Show nationals'},

{id: 'comp16',
caption: 'Gold World Show Ireland'},

{id: 'comp17',
caption: 'New Zealand Greeting Card'},

{id: 'comp18',
caption: 'Second place Wafa World Show Boston'},

{id:'comp19',
caption: 'Best in Show Oxford'},

{id:'comp20',
caption: 'Surrey Area Competition - First and Color Award'},

{id:'comp21',
caption: 'Weird and Wonderful, Sussex Competition 1st'},

{id:'comp22',
caption: 'Silver Gilt Chelsea Design'},

{id:'sod1',
caption:'Modern Cascade'},

{id:'sod2',
caption:'Miniature design'},

{id:'sod3',
caption: 'Vertical natural design competition'},

{id:'sod4',
caption: 'Country Landscape'},

{id:'sod5',
caption: 'Christmas design Abstract'},

{id:'sod6',
caption: 'Contemporary Pave'},

{id:'sod7',
caption:'Wall Art'},

{id:'sod8',
caption: "Sample - What is plant material"},

{id:'sod9',
caption:'Contemporary Linear Design, No Oasis'},

{id:'sod10',
caption: 'Natural Still Life'},

{id: 'sod11',
caption: 'Contemporary Still Life'},

{id:'sod12',
caption: 'Land Art design'},

{id:'sod13',
caption: 'Understanding Texture'},

{id:'sod14',
caption: 'Crescent'
},

{id:'sod15',
caption: 'Traditional Triangle'},

{id:'sod16',
caption: 'Contemporary foliage only'},

{id:'sod17',
caption: 'Layering Technique'},

{id:'sod18',
caption:'Manipulation Design'},

{id:'sod19',
caption:'Victorian Centerpiece'},

{id:'sod20',
caption: 'The use of the cane'},

{id: 'ws1',
caption: "Lingfield Club members' workshop"},

{id:'ws2',
caption: 'Christmas workshop table arrangement'},


{id:'ws3',
caption: 'Christmas workshop mantlepiece'},

{id:'ws4',
caption: 'Christmas workshop'},

{id:'ws5',
caption:'Workshop in Lingfield Barn'},

{id: 'seas1',
caption: 'Easter front door'},

{id:'seas2',
caption: 'Valentine design'},

{id:'seas3',
caption: 'The Start of Spring'},

{id:'seas4',
caption: 'Seasonal Halloween design'},


{id:'seas5',
caption:'Starry Chrismas'},

{id:'seas6',
caption: 'Easter ring'},

{id:'seas7',
caption:'Christmas design abstract'},

{id:'seas8',
caption: 'Easter hall design'},


//events category
{id:'events1',
caption:'Henfield'},

{id:'events2',
caption:'Winchester Flower Festival'},

{id:'events3',
caption:'Surrey Area AGM'},


{id:'events4',
caption: 'Southern Demonstrators exhibition piece '},

{id:'events5',
caption:'Southark Cathedral'},//should be exhibition

{id:'events6',
caption:'Southark close up'},//should be exhibition

{id:'events7',
caption:'Sackville College Exhibition'},//should be in exhibition

{id:'demo10',
caption:'Winchester Flower Festival'},//should be exhibition


{id:'ideas1',
caption: 'Layering'},


{id:'ideas3',
caption:'Table Design'},

{id:'ideas4',
caption:'Traditional Triangle'},

{id:'ideas5',
caption:'Poppy Ring for Guides'},

{id:'ideas6',
caption: 'Twists and Twirls Competition'},

{id:'ws7',
caption: 'Tutorial idea'},

{id:'comp23',
caption:"In the box competition"},

{id:'demo1',
caption: 'Lingfield Flower Club'},

{id:'demo2',
caption: 'Design from Lucinda Knapman'},

{id:'demo6',
caption:'Diary Award New Zealand Endless Circle'},

{id:'demo11',
caption: "Recent demonstrator Helen Hare"},
{id:'demo12',
caption: "Recent demonstrator Helen Hare"},
{id:'demo13',
caption: "Recent demonstrator Helen Hare"},
{id:'demo14',
caption: "Recent demonstrator Helen Hare"},
{id:'demo15',
caption: "Recent demonstrator Helen Hare"},

]

//extracts id of clicked element
document.addEventListener('click', extractId );

function extractId(e) {
    let elementId = e.target.id
    console.log('caughtID ' + elementId) 

//compares extracted id with an id on the list and gives name for the picture
    captions.forEach(myFunction)
    function myFunction(item) {
        if (elementId === item.id){
            captionText = item.caption
            console.log('Right Item is ' + captionText )
            return captionText
        }
    }
}

//enlarge picture by clicking on a thumbnail
const lightbox =document.createElement('div')
lightbox.id='lightbox'
document.getElementById('enlarged-picture').appendChild(lightbox)

const fill = document.getElementById('fill')
const instruction = document.getElementById('instruction')
const images = document.querySelectorAll('img')


let text ='test'


images.forEach(image => { 
     image.addEventListener('click', displayImg) 
     
     function displayImg(event) { 
        fill.remove()
        let imageId = event.target.id

        captions.forEach(myFunction)
    function myFunction(item) {
        if (imageId === item.id){
            captionText = item.caption
            
        }
    }

         lightbox.classList.add('active')
         const img =document.createElement('img')
         const subtitle = document.createElement('p')
         img.style.animation ="appear 1.25s ease-in forwards"
         subtitle.innerText = captionText
         subtitle.style.display = 'flex'
         subtitle.classList.add('subtitle')
         subtitle.style.animation ="appear 1.25s ease-in forwards"
         img.src = image.src
         img.id = image.id
         while(lightbox.firstChild)
         lightbox.removeChild(lightbox.firstChild)
         lightbox.appendChild(img)
         lightbox.appendChild(subtitle)
         
         image.style.border='3px #8c774f ridge'
         //lightbox.style.backgroundColor='#d9d4cc'
          
     }
 })


