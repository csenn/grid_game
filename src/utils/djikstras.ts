import { IGridGame } from "../examples/examples";
import { ICompare, PriorityQueue } from "@datastructures-js/priority-queue";
import { validateGridGame } from "./validate";

export interface IGridBox {
  health: number;
  moves: number;
  point: number[];
  path: number[][];
  pass?: boolean;
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

// Maybe use enums and some alternative here, but B,S,L, and M are validated in the validator function
const BoxLookup: Record<string, Record<string, number>> = {
  B: { health: 0, moves: -1 },
  S: { health: -5, moves: 0 },
  L: { health: -50, moves: -10 },
  M: { health: -10, moves: -5 },
};

function distanceBetweenPoints(a: number[], b: number[]) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

// Make sure to compare both health AND then moves in the Heap comparison
const compareBoxes: ICompare<IGridBox> = (a: IGridBox, b: IGridBox) => {
  if (a.health > b.health) {
    return -1;
  }
  if (a.health < b.health) {
    return 1;
  }
  return a.moves > b.moves ? -1 : 1;
};

export function runDjikstras(
  gridGame: IGridGame,
  startHealth = 200,
  startMoves = 450,
): IGridBox | null {
  // Will either be a string with an error message, or null if there is no error
  const validateError = validateGridGame(gridGame);

  if (validateError) {
    // Just throw an error here. Probably want to add something slightly different in production like creating a React error boundary or
    // allowing this function to return an object wrapper where an error can be returned on failure
    throw new Error("Djikstas Error: " + validateError);
  }

  const n = gridGame.grid.length;
  const m = gridGame.grid[0].length;

  // We use a priority queue, and on each iteration traverse to the next option where there is the maximum
  // amount of health (and moves if there is a tie). If we are able to reach the end than there is a
  // possible path.
  const bidsQueue = new PriorityQueue<IGridBox>(compareBoxes);

  const cache: Record<string, number> = {};

  // Here we track whether a grid_box has already been visited,
  // and to stop traversing if there are less moves than another visit
  const isAlreadyVisited = (point: number[], moves: number) => {
    const key = point[0] + "_" + point[1];

    if (!cache[key]) {
      cache[key] = moves;
      return false;
    }

    // if already visited with more moves left, return true
    if (cache[key] >= moves) {
      return true;
    }

    cache[key] = moves;
    return false;
  };

  // Starting Position. We assume health penalty at start block does not count
  bidsQueue.enqueue({
    health: startHealth,
    moves: startMoves,
    point: gridGame.start,
    path: [gridGame.start],
  });

  let closestPointSoFar = null;
  let closestSoFar = 10000;

  // Track number of queue pops for debug
  let popCounter = 0;

  while (!bidsQueue.isEmpty()) {
    const currentBox = bidsQueue.dequeue();

    popCounter += 1;

    // Continue if health or moves is negative
    if (currentBox.health < 0 || currentBox.moves < 0) {
      continue;
    }

    // Check to see if we reached end
    if (
      currentBox.point[0] === gridGame.end[0] &&
      currentBox.point[1] === gridGame.end[1]
    ) {
      console.log("popCounter", popCounter);
      currentBox.pass = true;
      return currentBox;
    }

    if (isAlreadyVisited(currentBox.point, currentBox.moves)) {
      continue;
    }

    // Track distance from end in case we cant reach end and want to return the closest path
    const distanceFromEnd = distanceBetweenPoints(
      currentBox.point,
      gridGame.end,
    );

    if (distanceFromEnd < closestSoFar) {
      closestSoFar = distanceFromEnd;
      closestPointSoFar = currentBox;
    }

    directions.forEach((direction) => {
      const next_x = currentBox.point[0] + direction[0];
      const next_y = currentBox.point[1] + direction[1];

      if (next_x < 0 || next_x === n || next_y < 0 || next_y === m) {
        return;
      }

      const nextPoint = [next_x, next_y];
      const box = gridGame.grid[nextPoint[0]][nextPoint[1]];
      const nextHealth = currentBox.health + BoxLookup[box]["health"];
      const nextMoves = currentBox.moves + BoxLookup[box]["moves"];

      bidsQueue.enqueue({
        health: nextHealth,
        moves: nextMoves,
        point: nextPoint,
        path: [...currentBox.path, nextPoint],
      });
    });
  }

  console.log("popCounter", popCounter);

  return closestPointSoFar;
}
