import { IGridGame } from "../examples/examples";

const boxOptions = new Set(["B", "L", "S", "M"]);

const isPointWithinGrid = (point: number[], grid: string[][]) => {
  if (point[0] < 0 || point[0] >= grid.length) {
    return false;
  }
  if (point[1] < 0 || point[1] >= grid[0].length) {
    return false;
  }
  return true;
};

// Return a string message if there is an error
export function validateGridGame(gridGame: IGridGame): string | null {
  if (gridGame.grid.length === 0) {
    return "Grid must have rows";
  }

  const firstRowSize = gridGame.grid[0].length;

  // Allow it to start anywhere inside box NOTE: might want to change it to an edge
  if (!isPointWithinGrid(gridGame.start, gridGame.grid)) {
    return "Start point is not within grid";
  }

  // Allow it to end anywhere inside box (might want to change it to an edge)
  if (!isPointWithinGrid(gridGame.end, gridGame.grid)) {
    return "End point is not within grid";
  }

  // Check all rows have same length and all boxes are valid
  for (let i = 0; i < gridGame.grid.length; i++) {
    const rowSize = gridGame.grid[i].length;
    if (rowSize !== firstRowSize) {
      return `Row ${i} does not have same size as first row`;
    }

    for (let j = 0; j < gridGame.grid[i].length; j++) {
      if (!boxOptions.has(gridGame.grid[i][j])) {
        return `Space i=${i} and j=${j} is invalid with value ${gridGame.grid[i][j]}`;
      }
    }
  }

  return null;
}
