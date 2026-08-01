// All the possible moves("L moves") of a knight is generated here.
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

// Checks if 2 array value is same eg.. [2,2] === [2,2] is true
function checkIfSameValue(x, y) {
  return x[0] === y[0] && x[1] === y[1];
}

// All the path from start to destination is generated here
function knightPath(start, destination) {
  // "hasWalked" if a node or a square has been walked or visited it will be stored here. To avoid being walked again. Its to avoid looping forever
  const hasWalked = new Set();
  hasWalked.add(`${start[0]},${start[1]}`);

  // store queue(BFS)
  let queue = [{ current: start, path: [start] }];
  let count = 0;

  while (queue[count]) {
    // Get the current path and check if we reached the destination.
    const path = queue[count].path;
    const curr = checkIfSameValue(queue[count].current, destination);

    // Return the shortest path once the destination is found.
    if (curr) {
      return queue[count].path;
    }

    // explore all valid knight moves from the current position.
    validMoves(queue[count].current).forEach((move) => {
      const hasMatch = `${move[0]},${move[1]}`;

      // if the move in valid knight is in hasWalker(this stores the square we walked or visited) return
      if (hasWalked.has(hasMatch)) return;
      // if not in hasWalked store this in there
      hasWalked.add(hasMatch);

      // pushes to queue eg. {current: [2,2], path: [[0,0],[2,2]]}
      queue.push({ current: move, path: [...path, move] });
    });

    // Move to the next position in the BFS queue.
    count++;
  }
}

// checks for errors in passed values in start and destination if theres no problem display the shortest path
function knightMoves(start, destination) {
  if (!start) {
    console.log(`No Start Value`);
    return;
  }
  if (!destination) {
    console.log(`No Destination Value`);
    return;
  }

  if (
    start.length !== 2 ||
    start[0] >= 8 ||
    start[0] < 0 ||
    start[1] >= 8 ||
    start[1] < 0
  ) {
    console.log("Invalid Start");
    return;
  }
  if (
    destination.length !== 2 ||
    destination[0] >= 8 ||
    destination[0] < 0 ||
    destination[1] >= 8 ||
    destination[1] < 0
  ) {
    console.log("Invalid Destination");
    return;
  }

  // if path found
  const result = knightPath(start, destination);

  /*
  This displays the path 
  output eg. You made it in 4 moves!  Here's your path:
  [ 3, 3 ]
  [ 5, 2 ]
  [ 7, 3 ]
  [ 6, 5 ]
  [ 7, 7 ]
 */
  console.log(`You made it in ${result.length - 1} moves!  Here's your path:`);
  result.forEach((move) => {
    console.log(move);
  });
}

knightMoves([3, 3], [7, 7]);
