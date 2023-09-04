const nadpis = document.getElementById('nadpis')
nadpis.style.color = 'green'


const items = [
    // {name: 'Bike', price:1000},
    // {name: 'TV', price:450},
    // {name: 'Book', price:7.50}
    'string1', 'string2', 'string3', 'string4'
]

console.log(items)

items.forEach(item => {
    item.addEventListener('click', onItemClick)
})

function onItemClick(){
    alert('This was clicked')
}