function validMoves(position) {
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
  let result = [];
  for (let i = 0; i < movesOfKnight.length; i++) {
    const val = [
      movesOfKnight[i][0] + position[0],
      movesOfKnight[i][1] + position[1],
    ];
    if (val[0] > 7 || val[0] < 0 || val[1] > 7 || val[1] < 0) {
      continue;
    }
    result.push(val);
  }
  return result;
}

// function knightMoves(start, destination) {
//   let visited = [start];
//   let queue = [[start]];
//   let count = 0;

//   validMoves(queue[count][queue[count].length - 1]).forEach((move) => {
//     const curr = queue[count];
//     const x = queue.push([curr[0], move]);
//   });

//   console.log(queue);
// }

function knightMoves(start, destination) {
  let hasVisited = [start];
  let queue = [{ current: start, path: [start] }];
  let count = 0;

  while (queue[count]) {
    const current = queue[count].path;

    validMoves(queue[count].current).forEach((move) => {
      const hasMatch = hasVisited.some(
        (subArr) =>
          subArr.length === 2 && subArr[0] === move[0] && subArr[1] === move[1],
      );
      hasVisited.push(move);
      if (hasMatch) return;
      queue.push({ current: move, path: [...current, move] });
    });
    count++;
  }
  queue.forEach((move) => {
    console.log(move.path);
  });
  // console.log(visited);
}

const test = [
  [0, 0],
  [1, 1],
  [2, 2],
];

const hasMatch = test.some(
  (subArr) => subArr.length === 2 && subArr[0] === 0 && subArr[1] === 0,
);

console.log(hasMatch);
// function check(x, y) {
//   return x[0] === y[0] && x[1] === y[1];
// }

knightMoves([0, 0]);
