let gameBoard = document.querySelector('.game-board')
let fruits = ['Apple', 'Passion', 'Pineapple', 'Sharon', 'Orange']
let fruits2 = ['Apple2', 'Passion2', 'Pineapple2', 'Sharon2', 'Orange2']
// console.log(fruits[1])
function startGame(arr) {

    let secretWord = random(arr)
    let splittedWord = spellArray(secretWord)
    console.log(splittedWord)
    hiddenWord(splittedWord)
}

function random(myArr){
    let randomPick = Math.floor(Math.random() * Math.floor(myArr.length) ) // ger dig ett indexvärde
    return myArr[randomPick] // ger dig ordet beroende på indexvärdet
}



function spellArray(word){
    return word.split('') // vårat ord blir till en array med bokstäver
}



function hiddenWord(letters) {
    gameBoard.append(letters.map(  letter => letter = '*' ).join(' '))
}






function matchUserData() {
    
} 
// Topping
function clearGameboard() {
    gameBoard.innerHTML = ''
}