const button = document.querySelectorAll('.button')
// console.log(button)
const body = document.querySelector('body') // body not access . 
// cosnole.log(body)
button.forEach(function(button){
    // console.log(button ) every button show line by line
    button.addEventListener('click', function(f){
        // console.log(f)
        // console.log(f.target)
        if (f.target.id === 'grey') {
            body.style.backgroundcolor = f.target.id  
        }
        if (f.target.id === 'yellow') {
            body.style.backgroundcolor = f.target.id  
        } 
        if (f.target.id === 'red') {
            body.style.backgroundcolor = f.target.id  
        }
    })
})


// practice two code
const form = document.querySelector('form')
// console.log(form)
const reuslt = document.querySelector('#results')
//console.log(reuslt)
const height = parseInt(document.querySelector('#height'))
const weight = parseInt(document.querySelector('#weight'))
if (height === '' || height(isNaN|| height <= 0)) {
    reuslt. innerHtml = `Please enter a valid height${height}`
}
if (weight === '' || weight(isNaN|| weight <= 0)) {
    reuslt. innerHtml = `Please enter a valid weight${weight}`
}
 
const bmi = (weight / ((height * height) / 10000)).toFixed(2)
 let message = ''
 if (bmi < 18.6) {
    message = 'underWeight'
 } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = 'normal weight'
 } else{
    message = 'over weight'
 }

 reuslt.innerHtml = `your bmi is <span>${bmi}</span> , ${message}`