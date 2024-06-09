const board = [
  ["X", "O", "O"],
  ["X", "O", "X"],
  ["O", "X", "X"],
];

function checkWinner(board, char) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let tic = [];
  let count = 0; //will provide index number for each value to store In either X or O
  for (let key in board) {
    for (let num in board) {
      if (board[key][num] == char) {
        tic.push(count);
        count++;
      } else {
        count++;
      }
    }
  }


  for (let key in winningConditions) {
    let winFrequency = 0;
    for (i = 0; i <= 2; i++) {
      if (tic.includes(winningConditions[key][i])) {
        winFrequency++;
        if (winFrequency == 3) {
          return true;
        }
      }
    }
  }
  return false;
}

if (checkWinner(board, "X") == true) {
  console.log("X is the winner");
} else if (checkWinner(board, "O") == true) {
  console.log("O is the winner");
} else if (
  checkWinner(board, "X") == false &&
  checkWinner(board, "O") == false
) {
  console.log("Match is a Draw!");
} else {
  ("A problem occured");
}
