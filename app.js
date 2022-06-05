/**se traen elementos y declaro variables */
const decisionComputerDisplay = document.getElementById('computer-choice') 
const decisionUserDisplay = document.getElementById('user-choice')
const resultadoDisplay = document.getElementById('result')
const posiblesDecisiones = document.querySelectorAll('button') /**botones */
let decisionUser;
let computerChoice
let result

/**Escuchar lo que se escribe por click *****/
posiblesDecisiones.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
  /*el dato que se escuchó se asigna en variable*/
  decisionUser = e.target.id
  /*mediante html se agrega la var decision*/
  decisionUserDisplay.innerHTML = decisionUser
  /*se decalran 2 funciones- generador y resultado*/
  generateComputerChoice()
  getResult()
}))

/*funcion para generar el voto del computer*/
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // es lo mismo : posiblesDecisiones.length
  
  if (randomNumber === 1) {
    computerChoice = 'Piedra'
  }
  if (randomNumber === 2) {
    computerChoice = 'Tijera'
  }
  if (randomNumber === 3) {
    computerChoice = 'Papel'
  }
  decisionComputerDisplay.innerHTML = computerChoice
}

/**funcion resultado***/
function getResult() {
  if (computerChoice === decisionUser) {
    result = 'Empate!'
  }
  if (computerChoice === 'Piedra' && decisionUser === "Papel") {
    result = 'Ganaste!'
  }
  if (computerChoice === 'Piedra' && decisionUser === "Tijera") {
    result = 'Perdiste!'
  }
  if (computerChoice === 'Papel' && decisionUser === "Tijera") {
    result = 'Ganaste!'
  }
  if (computerChoice === 'Papel' && decisionUser === "Piedra") {
    result = 'Perdiste!'
  }
  if (computerChoice === 'Tijera' && decisionUser === "Piedra") {
    result = 'Ganaste!'
  }
  if (computerChoice === 'Tijera' && decisionUser === "Papel") {
    result = 'Perdiste!'
  }
  
  resultadoDisplay.innerHTML = result /**se asigna por html el valor de result obtenido */
}