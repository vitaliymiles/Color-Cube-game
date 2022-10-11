const board = document.querySelector('#board')
const colors = [
  '#b0ff30',
  '#ff3061',
  '#ff30f8',
  '#3430ff',
  '#68ff30',
  '#30ffff',
  '#fff830',
  '#ff30f8',
  '#b030ff',
  '#80ff30',
  '#c830ff',
  '#fefcff',
]
const SQUARES_NUMBER = 480

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}, 0 0 1px ${'white'}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
