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
  let visited = [start];
  let queue = [{ current: start, path: [start] }];
  let count = 0;

  while (queue.length < 50) {
    const current = queue[count].path;

    validMoves(queue[count].current).forEach((move) => {
      queue.push({ current: move, path: [...current, move] });
    });
    count++;
  }
}
knightMoves([0, 0]);

const x = [
  [0, 0],
  [2, 1],
];

const y = [...x, [2, 2]];

// console.log(y);
