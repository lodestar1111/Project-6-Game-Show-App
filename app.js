// Game Variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startButton = document.querySelector(".btn__reset");
const buttons = document.querySelectorAll(".keyrow button");
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
  const ul = phrase.querySelector("ul");
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("li");
    ul.appendChild(item);
    item.innerHTML = arr[i];
    if (arr[i] === " ") {
      item.classList.add("space");
    } else {
      item.classList.add("letter");
    }
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
//check if a letter is in the phrase

function checkLetter(clickedButton) {
  const letterMatch = document.querySelectorAll(".letter");
  for (let i = 0; i < letterMatch.length; i++) {
    if (letterMatch[i].innerHTML.toLowerCase() === clickedButton) {
      find = clickedButton;
      letterMatch[i].classList.add("show");
    }
  }
}
return letterMatch;
//check if the game has been won or lost
function checkWin() {
  const letter = document.querySelector(".letter");
  const show = document.querySelector(".show");
  const head = document.querySelector(".title");
  if (show.length === letter.length) {
    overlay.className = "win";
    overlay.style.display = "flex";
    overlayWords.textContent = "You won! Good job.";
  } else if (missed === 5) {
    overlay.className = "lose";
    overlay.style.display = "flex";
    overlayWords.textContent = "You lost, would you like to try again?";
  }
}
//listen for the start game button to be pressed

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    checkLetter(e.target.innerHTML);
    e.target.classList.add("chosen");

    if (find === false) {
      missed += 1;
      lives[missed - 1];
    }
  }
});
