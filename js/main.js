import { Calculate } from "./Calculate.js"
import { View } from "./View.js"

console.log('vai carai')

const $ = document.querySelector.bind(document)

const numb1 = $('#first__number')
const numb2 = $('#second__number')
const bttn = $('#input__bttn')


bttn.addEventListener('click', (element) => {
    element.preventDefault()

    const calculate = new Calculate(numb1.value, numb2.value)
    const view = new View($('.comment__field ul'))


    let auxString = numb2.value

    if (auxString.charAt(auxString.length - 1) == '%') {
       view.update(calculate.IsPercent())
    } else {
        view.update(calculate.IsGreater())
    }

    numb1.value = ''
    numb2.value = ''
})



