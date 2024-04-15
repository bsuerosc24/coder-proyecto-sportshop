const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

//Funciones Click

btnIncrement.addEventListener('click', () => {
    //1 = 1 + 1
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecrement.addEventListener('click', () => {
    //1 = 1 - 1
    if (valueByDefault === 1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})


//Toggle
// Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleReview = document.querySelector('.title-review')

// Constantes Contenido Texto
const ContentDescription = document.querySelector('.text-description')
const ContentReview = document.querySelector('.text-review')

// Funciones Toggle
toggleDescription.addEventListener('click', () => {
    ContentDescription.classList.toggle('hidden')
})

toggleReview.addEventListener('click', () =>{
    ContentReview.classList.toggle('hidden')
})

