var figure = 0;
var numbOfFiguresInImput = 0;
var inputField = document.querySelector('input');
var butttons = document.querySelectorAll('button');
var classItemsList = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
var drawingBlock = document.getElementById('drawingBlock');
classItemsList[0].classList.add("Square");
classItemsList[1].classList.add("Circle");
classItemsList[2].classList.add("Triangle");
butttons.forEach(element => {
    element.addEventListener("click", function(){
        figure = element.id;
        numbOfFiguresInImput = parseInt(inputField.value);
        DrawFigures(numbOfFiguresInImput);
    }, false)
},this)

function DrawFigures(numb){
    var i = 0;
    while(i<numb){
        var element = document.createElement('div');
        element.classList.add(classItemsList[figure].classList[0]);
        console.log(getRandomArbitrary(15,600));
        element.style.top = parseInt(getRandomArbitrary(15,600)) + 'px';
        element.style.right = parseInt(getRandomArbitrary(0,600)) + 'px';
        
        drawingBlock.prepend(element);
        i++;
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

