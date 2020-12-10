// Selectors
let gameBoard = document.querySelector('.game-board')

// Global Variables
let guessedLetter

// Arrays
let fruits = ['Apple', 'Passion', 'Pineapple', 'Sharon', 'Orange']
let fruits2 = ['Apple2', 'Passion2', 'Pineapple2', 'Sharon2', 'Orange2']

// Event Handlers
window.addEventListener('keyup', userInput)

// Functions
function startGame(arr) {

    let secretWord = random(arr)
    let splittedWord = spellArray(secretWord)
    console.log(splittedWord)
    hiddenWord(splittedWord)
}

function random(myArr){
    console.log('myArr: ' + myArr)
    let randomPick = Math.floor(Math.random() * Math.floor(myArr.length) ) // ger dig ett indexvärde
    console.log('randomPick: ' + randomPick)
    console.log('return: '+myArr[randomPick])
    return myArr[randomPick] // ger dig ordet beroende på indexvärdet
}



function spellArray(word){
    return word.split('') // vårat ord blir till en array med bokstäver ['O','r','a','n','g','e']
}



function hiddenWord(letters) {
    gameBoard.append( letters.map(  letter => letter = '*' ).join(' '))
        guessLetter(guessedLetter)
}





function userInput(e) {
    guessedLetter = e.key
   return guessedLetter
} 

// Topping
function clearGameboard() {
    gameBoard.innerHTML = ''
}