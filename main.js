function knightMoves(start, end) {
  let movesOfKnight = [
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
  ];
  for (let i = 0; i < movesOfKnight.length; i++) {
    const val = [
      movesOfKnight[i][0] + start[0],
      movesOfKnight[i][1] + start[1],
    ];

    if (val[0] > 7 || val[0] < 0 || val[1] > 7 || val[1] < 0) {
      continue;
    }
    console.log(val);
  }
}

console.log(knightMoves([7, 0]));
