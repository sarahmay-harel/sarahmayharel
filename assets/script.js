// Old dark mode button - doesn't apply across page journeys
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

let checkbox = document.getElementById("moonButton");
let body = document.getElementById('bodyID')

checkbox.addEventListener('change', function () {
    localStorage.setItem('dark-mode', this.checked);
    if (this.checked) {
        body.classList.add('dark-mode')
    } else {
        body.classList.remove('dark-mode')
    }
});

if (localStorage.getItem('dark-mode') == 'true') {
    body.classList.add('dark-mode');
}


// Testing check value of local storage key
let testingLocalStorage = localStorage.getItem('dark-mode');
if (testingLocalStorage != 'false') {
    console.log(testingLocalStorage);
} else {
    console.log('buffy');
}



//Delete and insert leaf or stars depending on dark mode

function foo() {
    let leafElement = document.getElementById('leafJs');
    let starsElement = document.getElementById("starsJs")
    let bodyElement = document.getElementById("bodyID")

    if (bodyElement.classList.contains("dark-mode")) {

        //test
        console.log("Helppppp")

        // removes the leaf png if Dark Mode is on (not working)
        leafElement.remove();

        //Create missing image element to toggle images back on and off as Dark Mode is turned on and off (not working)

        // var img = document.createElement('img');
        // img.src="assets/img/—Pngtree—sparkling stars shiny sparks yellow_6320234.png"
        // document.getElementById('imageCol').appendChild('img');

    } else {
        // removes the stars element if Dark Mode is NOT on (working)
        starsElement.remove();
        // function bar() {
        //     document.getElementById("starsJs").remove();
        // }
        // setTimeout(bar, 2000);

        //Create missing image element to toggle images back on and off as Dark Mode is turned on and off (not working)

        // var img = document.createElement('img');
        // img.src="https://i.imgur.com/mhGjsHt.png"
        // document.getElementById('imageCol').appendChild('img');
    }
   setTimeout(foo, 1000);
}

foo();