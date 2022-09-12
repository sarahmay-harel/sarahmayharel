// Old dark mode button - doesn't apply across page journeys
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

let checkbox = document.getElementById("moonButton");
let body = document.getElementById('body')

checkbox.addEventListener('change', function () {
    localStorage.setItem('dark-mode', this.checked);
    if (this.checked) {
        body.classList.add('dark-mode')
    } else {
        body.classList.remove('dark-mode')
    }
});

// if(localStorage.getItem('moonButton')) {
//     body.classList.add('dark-mode');
// }




//Testing localStorage (can be deleted later)
// const button = document.getElementById('moonButton');

// button.addEventListener('click', function handleClick() {
//   console.log('element clicked 2');
//   localStorage.setItem('moonButton', 'clicked')
// });

// localStorage.setItem('myCat', 'Tom');