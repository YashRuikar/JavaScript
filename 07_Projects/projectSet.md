# Projects related to DOM

## Project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=.vscode%2Fsettings.json)

# Solution Code

## Project 1 Solution

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {

        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor = e.target.id
        }

    })
})

```

## Project 2 Solution

```javascript

const form = document.querySelector('form')

// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // Show the result
        results.innerHTML = `<span>${bmi}</span>`

        if(bmi <= 18.6){
            results.innerHTML = `<div>${bmi}</div> <span>Under Weight = Less than 18.6</span>`
        }
        if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<div>${bmi}</div> <span>Normal Range = 18.6 and 24.9</span>`
        }
        if(bmi > 24.9){
            results.innerHTML = `<div>${bmi}</div> <span>Overweight = Greater than 24.9</span>`
        }
    }
})

```

## Project 3 Solution

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')  // Same as above

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```