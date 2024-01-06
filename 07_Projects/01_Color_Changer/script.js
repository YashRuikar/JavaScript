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
        if(e.target.id == 'palegoldenrod'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'darksalmon'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'aqua'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'indianred'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id == 'slateblue'){
            body.style.backgroundColor = e.target.id
        }

    })
})