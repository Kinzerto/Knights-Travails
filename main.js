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

function checkMove(x, y) {
  return x[0] === y[0] && x[1] === y[1];
}

function knightPath(start, destination) {
  let hasVisited = [start];
  let queue = [{ current: start, path: [start] }];
  let count = 0;

  while (queue[count]) {
    const current = queue[count].path;
    if (checkMove(queue[count].current, destination)) return queue[count].path;

    validMoves(queue[count].current).forEach((move) => {
      const hasMatch = hasVisited.some(
        (subArr) =>
          subArr.length === 2 && subArr[0] === move[0] && subArr[1] === move[1],
      );

      if (hasMatch) return;
      hasVisited.push(move);
      queue.push({ current: move, path: [...current, move] });
    });

    count++;
  }
}

function knightMoves(start, destination) {
  if (!start) {
    console.log(`No Start Value`);
    return;
  }
  if (!destination) {
    console.log(`No Destination Value`);
    return;
  }

  if (start[0] >= 8 || start[0] < 0 || start[1] >= 8 || start[1] < 0) {
    console.log("Invalid Start");
    return;
  }
  if (
    destination[0] >= 8 ||
    destination[0] < 0 ||
    destination[1] >= 8 ||
    destination[1] < 0
  ) {
    console.log("Invalid Destination");
    return;
  }

  const result = knightPath(start, destination);
  console.log(`You made it in ${result.length - 1} moves!  Here's your path:`);
  result.forEach((move) => {
    console.log(move);
  });
}

knightMoves([0, -1], [2, 1]);
