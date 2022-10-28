let homeScore = 0;
let guestScore = 0;


const container = document.querySelector('.container');
const homeDisplay = document.getElementById('home-display');
const guestDisplay = document.getElementById('guest-display');
const newGame = document.querySelector('#new-game')

container.addEventListener('click', function (e) {
  const target = e.target
  const homePts = target.dataset.homePts
  const guestPts = target.dataset.guestPts

  if (homePts) {
    homeScore += +homePts
    homeDisplay.textContent = homeScore
  }

  if (guestPts) {
    guestScore += +guestPts
    guestDisplay.textContent = guestScore
  }

  highlight()
})

function highlight() {
  homeDisplay.classList.toggle('highlighter', homeScore > guestScore)
  guestDisplay.classList.toggle('highlighter', homeScore < guestScore)
}

newGame.addEventListener('click', function () {
  homeScore = 0
  guestScore = 0
  homeDisplay.textContent = 0
  guestDisplay.textContent = 0
  homeDisplay.classList.remove('highlighter')
  guestDisplay.classList.remove('highlighter')
})




