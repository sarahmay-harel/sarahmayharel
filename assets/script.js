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
} else {
    body.classList.remove('dark-mode');
}


// Testing check value of local storage key
let testingLocalStorage = localStorage.getItem('dark-mode');
if (testingLocalStorage != 'false') {
    console.log(testingLocalStorage);
} else {
    console.log('buffy');
}



//Delete and insert leaf or stars depending on dark mode

// function foo() {
    //let leafElement = document.getElementById('leafJs');
   // let starsElement = document.getElementById("starsJs")
    //let bodyElement = document.getElementById("bodyID")

   // if (localStorage.getItem('dark-mode') == 'true') {

        //Test
        //console.log("Dark mode is on")

        //Removes the leaf png if Dark Mode is on (not working)
       // leafElement.remove();

        //Insert DOM element
        // const newNode = document.createElement("div")
        // const textNode = document.createTextNode("Buffy is the cutest")

        // newNode.appendChild(textNode);

        // const list = document.getElementById("imageCol")
        // list.insertBefore(newNode, null)


        //Create missing image element to toggle images back on and off as Dark Mode is turned on and off (not working)
        // var img = document.createElement('img');
        // img.src="assets/img/—Pngtree—sparkling stars shiny sparks yellow_6320234.png"
        // document.getElementById('imageCol').appendChild('img');

   // } else {
        //Test
        //console.log("Dark mode is off")

        //Removes the stars element if Dark Mode is NOT on (working)
      //  starsElement.remove();


        //Check after a certain amount of time whether to remove the stars
        // function bar() {
        //     document.getElementById("starsJs").remove();
        // }
        // setTimeout(bar, 2000);


        //Create missing image element to toggle images back on and off as Dark Mode is turned on and off (not working)
        // var img = document.createElement('img');
        // img.src="https://i.imgur.com/mhGjsHt.png"
        // document.getElementById('imageCol').appendChild('img');
  //  }
   //setTimeout(foo, 2000);
//}

// foo();