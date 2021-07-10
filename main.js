let introString = "Thanks for dropping by.  My name is Dustin.  I am a web developer and front-end engineer, based in Regina.";

let introductionTextHandle = document.getElementById("introductionText");
let arrayString = [];
let arrayToBuild = [];
let builtString = "";
let writtenCharCounter = 0;

function splitIntroString() {

    arrayString = introString.split("");

}
splitIntroString();

//useless, can delete ???
function setIntroText() {
    builtString = arrayString.join("");
    introductionTextHandle.innerText = builtString;
    console.log("building string");
}

//setIntroText();

function buildOutputString() {
    for(let i = 0; i < arrayString.length; i++){
        writeString(i)
        
    }
}

function writeString(i) {
    setTimeout(function() {
        arrayToBuild[i] = arrayString[i];
        builtString = arrayToBuild.join("");
        //console.log(builtString);
        introductionTextHandle.innerText = builtString;
        writtenCharCounter++;
        //console.log(writtenCharCounter);
    }, 72 * i)
}

setTimeout(function(){ buildOutputString(); }, 2000);

let aboutBTN = document.getElementById("aboutCard");

let aboutWindow = document.getElementById("aboutWindow");

const openModal = (whichModal) => {
    whichModal.style.display = "block";
}

const closeModal = () => {
    aboutWindow.style.display = "none";

}

//aboutBTN.addEventListener("click", function() {openModal(aboutWindow)});