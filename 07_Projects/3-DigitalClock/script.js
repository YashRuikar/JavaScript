const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')   // Same as above

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)