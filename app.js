// Game Variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startButton = document.querySelector(".btn__reset");
const buttons = document.querySelectorAll(".keyrow, button");
let missed = 0;
let lives = document.querySelectorAll(".tries");
// Phrases

let phrases = [
  "Hold my beer",
  "Do not grow up it is a trap",
  "Of course I talk to myself",
  "So many cats so little time",
  "Humpty Dumpty was pushed",
  "Staying home saves lives",
  "This button has no funny phrase in it",
  "May I see your manager",
];

startButton.addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
});

//return a random phrase from an array
function getRandomPhraseAsArray(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  let split = arr[randomNumber].split("");
  return split;
}

getRandomPhraseAsArray(phrases);

//adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("");
    ul.appendChild(item);
    item.innerHTML = arr[i];
    if (arr[i] === "") {
      list.classList.add("space");
    } else {
      list.classList.add("letter");
    }
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
//check if a letter is in the phrase
function checkLetter (button) {
checkLetter = 
let match = ('null')
for(let i = 0; i; i<li.length; i++) {
  if (li[i] === button) {
    
  }


}

};

//check if the game has been won or lost
const checkWin = () => {};

//listen for the start game button to be pressed

// listen for the onscreen keyboard to be clicked
