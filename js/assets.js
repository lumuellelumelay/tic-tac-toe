export class Assets {
  changeStatus() {
    const boardOverlay = document.querySelector('.board-overlay');
    if (boardOverlay.dataset.status === 'true') {
      boardOverlay.dataset.status = 'false';
    } else {
      boardOverlay.dataset.status = 'true';
    }
  }

  changeSubtitle(condition, winnerPlayer) {
    const resetButton = document.querySelector('#reset-button');
    const winner = document.querySelector('#winner');

    if (condition[0].score === 3 || condition[1].score === 3) {
      resetButton.textContent = 'New Game';
      winner.textContent = winnerPlayer;
    } else {
      resetButton.textContent = 'Next Round';
      winner.textContent = winnerPlayer;
    }
  }
}
