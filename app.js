// Game Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelectorAll('.btn__reset');
const buttons = document.querySelectorAll('.keyrow button');
let missed = 0;
let lives = document.querySelectorAll('.tries');
// Phrases
function startGame() {
    let phrases = [
        "Hold my beer",
        "Do not grow up it is a trap",
        "Of course I talk to myself",
        "So many cats so little time",
        "Humpty Dumpty was pushed",
        "Staying home saves lives",
        "This button has no funny phrase in it",
        "May I see your manager"
    ];

    startButton.addEventListener("click", () =>
        document.getElementById("overlay").style.display = "none");

    //return a random phrase from an array
    function getRandomPhraseAsArray(arr) {
        let randomNumber = Math.floor(Math.random() * arr.length);
        let split = arr[randomNumber].split('');
        return split;
    }

    getRandomPhraseAsArray(phrases);

    function addPhraseToDisplay(arr) {





        //adds the letters of a string to the display
        const addPhraseToDisplay = arr => {


        }

        //check if a letter is in the phrase
        const checkLetter = button => {


        }

        //check if the game has been won or lost
        const checkWin = () => {


        }

        //listen for the start game button to be pressed



        // listen for the onscreen keyboard to be clicked