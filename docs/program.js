/* Faithful browser port of tic-tac-toe-visual-cplusplus.cpp. Original C++ is unchanged. */
window.runProject = async function (ui) {
  const squares = Array.from({ length: 10 }, (_, i) => i === 0 ? 'o' : String(i));
  let player = 1;
  const combinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  function board() {
    ui.screen('TIC TAC TOE');
    ui.line('Player 1 (X)  -  Player 2 (O)\n');
    ui.line('     |     |     ');
    ui.line('  ' + squares[1] + '  |  ' + squares[2] + '  |  ' + squares[3]);
    ui.line('_____|_____|_____');
    ui.line('     |     |     ');
    ui.line('  ' + squares[4] + '  |  ' + squares[5] + '  |  ' + squares[6]);
    ui.line('_____|_____|_____');
    ui.line('     |     |     ');
    ui.line('  ' + squares[7] + '  |  ' + squares[8] + '  |  ' + squares[9]);
    ui.line('     |     |     ');
  }
  while (true) {
    board();
    const choice = await ui.int('Player ' + player + ', enter a number (1-9):', 1, 9);
    if (squares[choice] !== String(choice)) {
      ui.line('Invalid move. That square has already been taken.');
      continue; // same player gets another turn
    }
    squares[choice] = player === 1 ? 'X' : 'O';
    if (combinations.some(group => group.every(index => squares[index] === squares[group[0]]))) {
      board(); ui.block('==> Player ' + player + ' win'); return;
    }
    if (squares.slice(1).every((cell, index) => cell !== String(index + 1))) {
      board(); ui.block('==> Game draw'); return;
    }
    player = player === 1 ? 2 : 1;
  }
};
