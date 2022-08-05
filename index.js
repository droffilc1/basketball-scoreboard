let homeScores = document.getElementById('homescores');
let guestScores = document.getElementById('guestscores');

let count = 0;
let guestCount = 0;

function restart() {
  
}

function add1Point() {
  count += 1;
  homeScores.textContent = count;  
}

function add2Points() {
  count += 2;
  homeScores.textContent = count;
}

function add3Points() {
  count += 3;
  homeScores.textContent = count;
}

function add1PointGuest() {
  guestCount += 1;
  guestScores.textContent = guestCount;
}

function add2PointsGuest() {
  guestCount += 2;
  guestScores.textContent = guestCount;
}

function add3PointsGuest() {
  guestCount += 3;
  guestScores.textContent = guestCount;
}

function newGame() {
  count = 0;
  guestCount = 0;
  homeScores.textContent = count;
  guestScores.textContent = guestCount
}




