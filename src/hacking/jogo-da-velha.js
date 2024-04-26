function jogar(tabuleiro) {
  let player = 'x';
  let opponent = 'o'

  function getMoveCount(tab) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tab[i][j] !== '') count += 1;
      }
    }
    return count;
  }

  const moveCount = getMoveCount(tabuleiro);

  

  function isMovesLeft(tab) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tab[i][j] === '') return true;
      }
    }
    return false;
  }

  function getScore(tab, player) {
    // Checking victory for Rows (X | 0)
    for (let row = 0; row < 3; row++) {
      if (tab[row][0] == tab[row][1] && tab[row][1] == tab[row][2]) {
        if (tab[row][0] == player) return +10;
        else if (tab[row][0] == opponent) return -10;
      }
    }
    // Checking victory for Cols (X | 0)
    for (let col = 0; col < 3; col++) {
      if (tab[0][col] == tab[1][col] && tab[1][col] == tab[2][col]) {
        if (tab[0][col] == player) return +10;
        else if (tab[0][col] == opponent) return -10;
      }
    }
    // Checking victory for Diagonals (X | 0)
    if (tab[0][0] == tab[1][1] && tab[1][1] == tab[2][2]) {
      if (tab[0][0] == player) return +10;
      else if (tab[0][0] == opponent) return -10;
    }

    if (tab[0][2] == tab[1][1] && tab[1][1] == tab[2][0]) {
      if (tab[0][2] == player) return +10;
      else if (tab[0][2] == opponent) return -10;
    }

    // Else if none of them have won then return 0
    return 0;
  }

  function minimax(board, depth, isMax) {
    let score = getScore(board);

    // If Maximizer has won the game
    // return his/her evaluated score
    if (score == 10) return score;

    // If Minimizer has won the game
    // return his/her evaluated score
    if (score == -10) return score;

    // If there are no more moves and
    // no winner then it is a tie
    if (isMovesLeft(board) == false) return 0;

    // If this maximizer's move
    if (isMax) {
      let best = -1000;

      // Traverse all cells
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Check if cell is empty
          if (board[i][j] === '') {
            // Make the move
            board[i][j] = player;
            // Call minimax recursively
            // and choose the maximum value
            best = Math.max(best, minimax(board, depth + 1, !isMax));
            // Undo the move
            board[i][j] = '';
          }
        }
      }
      return best;
    } else {// If this minimizer's move
      let best = 1000;
      // Traverse all cells
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Check if cell is empty
          if (board[i][j] === '') {
            // Make the move
            board[i][j] = opponent;

            // Call minimax recursively and
            // choose the minimum value
            best = Math.min(best, minimax(board, depth + 1, !isMax));

            // Undo the move
            board[i][j] = '';
          }
        }
      }
      return best;
    }
  }

  function findBestMove(tab) {
    let bestVal = -1000;
    let row = -1;
    let col = -1;

    // Traverse all cells, evaluate
    // minimax function for all empty
    // cells. And return the cell
    // with optimal value.
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Check if cell is empty
        if (tab[i][j] == '') {
          // Make the move
          tab[i][j] = player;

          // compute evaluation function
          // for this move.
          let moveVal = minimax(tab, 0, false);

          // Undo the move
          tab[i][j] = '';

          // If the value of the current move
          // is more than the best value, then
          // update best
          if (moveVal > bestVal) {
            row = i;
            col = j;
            bestVal = moveVal;
          }
        }
      }
    }
    return [row, col];
  }



  return findBestMove(tabuleiro);
  
}

jogar([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]);
