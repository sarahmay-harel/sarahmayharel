function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

let checkbox = document.getElementById("moonButton");
let body = document.getElementById('body')

checkbox.addEventListener('change', function () {
    localStorage.setItem('test', this.checked);
    if (this.checked) {
        body.classList.add('dark-mode')
    } else {
        body.classList.remove('dark-mode')
    }
});

if(localStorage.getItem('moonButton')) {
    body.classList.add('dark-mode');
}

localStorage.setItem('myCat', 'Tom');
