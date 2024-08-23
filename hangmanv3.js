const letter = document.createElement("div");
letter.className = "letters";
document.body.appendChild(letter);

const letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

let randomWord = "";
let displayedWord = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const topics = ["cities", "countries", "animals"];
const randomIndex = getRandomInt(topics.length);
const randomTopic = topics[randomIndex];

const test = document.createElement("h1");
test.className = "newtest";
document.body.appendChild(test);

if (randomTopic === "cities") {
    const city = document.createElement("h1");
    city.textContent = "Name a city";
    document.body.appendChild(city);
    const citiess = ["Chicago", "London", "Tokyo", "Paris", "Dubai", "Singapore"];
    randomWord = citiess[getRandomInt(citiess.length)];
    console.log(randomWord)
} else if (randomTopic === "animals") {
    const animal = document.createElement("h1");
    animal.textContent = "Name an animal";
    document.body.appendChild(animal);
    const animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Kangaroo"];
    randomWord = animals[getRandomInt(animals.length)];
    console.log(randomWord)
} else if (randomTopic === "countries") {
    const country = document.createElement("h1");
    country.textContent = "Name a country";
    document.body.appendChild(country);
    const countries = ["Canada", "Mexico", "Germany", "France", "Italy", "Spain"];
    randomWord = countries[getRandomInt(countries.length)];
    console.log(randomWord)
}

displayedWord = "_ ".repeat(randomWord.length).trim();
test.textContent = displayedWord;

const lives = document.createElement("h2");
let livescount = 10;
lives.textContent = `You have ${livescount} lives left!`;
document.body.appendChild(lives);
function checkForWin() {
    // if (displayedWord.replace(" ", "") === randomWord) {
    //     alert(`Congratulations! You've guessed the  ` + randomWord);
    // }
    if (displayedWord.includes("_") == false){
        alert(`Congratulations! You've guessed the  ` + randomWord);
     location.reload();
    }
}
for (let i = 0; i < letters.length; i++) {
    const thedivs = document.createElement("h2");
    thedivs.className = "thedivs";
    thedivs.textContent = letters[i];

    thedivs.onclick = function () {
        const clickedLetter = letters[i];
        let newDisplay = "";
        let isLetterCorrect = false;

        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j].toLowerCase() === clickedLetter.toLowerCase()) {
                newDisplay += randomWord[j] + " ";
                isLetterCorrect = true;
            } 
            else {
                newDisplay += displayedWord[j*2] + " ";
            }
        }
    
        displayedWord = newDisplay.trim();
        test.textContent = displayedWord;
        checkForWin();
        if (isLetterCorrect) {
            thedivs.style.backgroundColor = "whitesmoke";
        } else {
            thedivs.style.backgroundColor = "lightcoral"; 
            livescount--;
            lives.textContent = `You have ${livescount} lives left!`;

            if (livescount <= 0) {
                alert("Game Over! You've run out of lives.");
                location.reload();
            }
        }

        thedivs.style.pointerEvents = 'none';
    }

    letter.appendChild(thedivs);
}