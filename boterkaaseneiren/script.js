
  function myOnClickFn(){
    document.location.href="start.html";
   }
   


const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

//De variabelen die je nodig hebt voor de figuren die je moet plaatsen.
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// De combinaties van winnen die mogelijk zijn in het spel, de plaatsen waarop ze geplaatst worden om te winnen, verticaal en horizontaal en schuin.
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

// De variabelen van elements die gebruikt worden in de game.

startGame()

restartButton.addEventListener('click', startGame)
// zorgt ervoor dat je op de "opnieuw" knop kunt klikken

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })

//Zorgt ervoor dat je de game kunt starten door te kunnen klikken op vakken en een O of X in te vullen.
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}
//zorgt ervoor dat je de game kunt starten door boven een vak te hangen.

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

//Placemark, checks voor win, Checks voor gelijkspel, draait de rollen om.

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Gelijkspel!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "Player 1" : "Player 2"} Wint!`
  }
  winningMessageElement.classList.add('show')
}
// Deze code zorgt ervoor dat als X en O tegelijk staan je een "Draw!" te zien krijgt of je krijgt te zien wanneer er iemand heeft gewonnen.

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

//zorgt ervoor dat als bijde spelers verloren hebben het eindigt in een gelijkspel door beide variabelen op te roepen.

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}
//zorgt ervoor dat de spelers van figuren wisselen omste beurten

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

//zorgt ervoor dat je boven vakken hangt met verschillende figuren omste beurten.

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {''
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
//checked of je hebt gewonnen en als je gewonnen hebt door middel van de winning cominations, return cellelements brengt je terug bij het begin van het spel waar er nog niks is ingevuld.

