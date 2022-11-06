function createGame(player1, hour, player2) {
  return `
    <li>
      <img
        src="./assets/${player1}-icon.svg"
        alt="Bandeira ${player1}"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/${player2}-icon.svg"
        alt="Bandeira ${player2}"
      />     
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3

  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard(
    '24/11',
    'Quinta',
    createGame('Cameroon', '7:00', 'Switzerland') +
      createGame('Portugal', '13:00', 'Ghana') +
      createGame('Brazil', '16:00', 'Serbia')
  ) +
  createCard(
    '28/11',
    'Segunda',
    createGame('South-Korea', '10:00', 'Ghana') +
      createGame('Brazil', '13:00', 'Switzerland') +
      createGame('Portugal', '16:00', 'Uruguay')
  ) +
  createCard(
    '28/11',
    'Segunda',
    createGame('South-Korea', '10:00', 'Ghana') +
      createGame('Brazil', '13:00', 'Switzerland') +
      createGame('Portugal', '16:00', 'Uruguay')
  )
