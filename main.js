let addToDoButton = document.getElementsByClassName('addToDo')[0];
let namesContainer = document.getElementsByClassName('names')[0];
let inputField = document.getElementsByClassName('inputField')[0];

let lot1Container = document.getElementsByClassName('names')[1];
let inputField2 = document.getElementsByClassName('inputField')[1];
let EnterButton = document.getElementsByClassName('addToDo')[1];

let lot2Container = document.getElementsByClassName('names')[2];
let inputField3 = document.getElementsByClassName('inputField')[2];
let EnterButton2 = document.getElementsByClassName('addToDo')[2];

let lot3Container = document.getElementsByClassName('names')[3];
let inputField4 = document.getElementsByClassName('inputField')[3];
let EnterButton3 = document.getElementsByClassName('addToDo')[3];

let lot4Container = document.getElementsByClassName('names')[4];
let inputField5 = document.getElementsByClassName('inputField')[4];
let EnterButton4 = document.getElementsByClassName('addToDo')[4];

let lot5Container = document.getElementsByClassName('names')[5];
let inputField6 = document.getElementsByClassName('inputField')[5];
let EnterButton5 = document.getElementsByClassName('addToDo')[5];

let rearrangeButton = document.getElementById('rearrange')

let names = [];
let lot = [[], [], [], [], []];
let colours = [0, 1];
let red = [];
let blue = [];
let redContainer = document.getElementById('redcontainer')
let blueContainer = document.getElementById('bluecontainer')

function randColour() {
    var number = Math.round(Math.random() + 1)
    return number;
}

function rearrangeLot(lottery) {
    if (lottery.length > 0) {
        for (var i=0; i < lottery.length; i++){
            var colour = randColour();
            console.log(colour)
            if (colour == 1) {
                red.push(lottery[i])
    
            }
            else {
                blue.push(lottery[i])
            }
    
        }

    }
    
}

function checkElement(element) {

    for (var i =0; i < lot.length; i++) {
        for (var j = 0; j < lot[i].length; j++) {
            if (lot[i][j] == element) {
                return i;
            }
        }
    }
    return -1;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function changeColour() {
    for (var j = 0; j < names.length; j++) {
        var i = checkElement(names[j])
        if (i >= 0) {
            var object = namesContainer.getElementsByTagName('p')[j];
            object.style.color = 'green'
            object.innerText = names[j] + ", Lot " + (i+1);

        }

    }
}

addToDoButton.addEventListener('click', function(){
    if (names.length <= 28)
    {
        var inputNames= inputField.value.split(', ');
        names = names.concat(inputNames);
        console.log(names);

        for (var i = 0; i < inputNames.length; i++) {
            var paragraph = document.createElement("p")
            paragraph.classList.add('paragraph-styler')
            paragraph.innerText = inputNames[i];
            namesContainer.appendChild(paragraph);
        
            changeColour();
        }
        
        inputField.value = null;
        inputField.focus();
        

    }
    
})

EnterButton.addEventListener('click', function(){
    lot[0].push(inputField2.value)
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField2.value;
    lot1Container.appendChild(paragraph);
    changeColour();
    inputField2.value = null;
        inputField2.focus();
})

EnterButton2.addEventListener('click', function(){
    lot[1].push(inputField3.value)
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField3.value;
    lot2Container.appendChild(paragraph);
    changeColour();
    inputField3.value = null;
        inputField3.focus();
})

EnterButton3.addEventListener('click', function(){
    lot[2].push(inputField4.value)
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField4.value;
    lot3Container.appendChild(paragraph);
    changeColour();
    inputField4.value = null;
        inputField4.focus();
})

EnterButton4.addEventListener('click', function(){
    lot[3].push(inputField5.value)
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField5.value;
    lot4Container.appendChild(paragraph);
    changeColour();
    inputField5.value = null;
        inputField5.focus();
})

EnterButton5.addEventListener('click', function(){
    lot[4].push(inputField6.value)
    var paragraph = document.createElement("p")
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField6.value;
    lot5Container.appendChild(paragraph);
    changeColour();
    inputField6.value = null;
        inputField6.focus();
})

rearrangeButton.addEventListener('click', function(){
    
    
    removeAllChildNodes(redContainer);
    
    
    removeAllChildNodes(blueContainer);
    red = [];
    blue = [];


    for (var i=0; i < 5; i++) {
        if (lot[i].length > 0) {
            rearrangeLot(lot[i])

        }
        

    }
    var r = document.createElement('p')
    r.classList.add('paragraph-styling')
    for (var i = 0; i < red.length; i++) {
        r.innerText += " " + red[i];
    }
    redContainer.appendChild(r)
    var b = document.createElement('p')
    b.classList.add('paragraph-styling')
    for (var i = 0; i < blue.length; i++) {
        b.innerText = b.innerText + " " + blue[i];
    }
    blueContainer.appendChild(b)
})