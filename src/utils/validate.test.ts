import { assert } from "console";
import { IGridGame } from "../examples/examples";
import { validateGridGame } from "./validate";

test("Grid Validation bad letter", () => {
  const example = [["M"], ["M"], ["U"], ["M"], ["M"]];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [4, 0],
  };

  const errorMessage = validateGridGame(gridGame);
  expect(errorMessage).toBe(`Space i=${2} and j=${0} is invalid with value U`);
});

test("Grid Validation row size", () => {
  const example = [["M"], ["M", "L"]];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [1, 0],
  };

  const errorMessage = validateGridGame(gridGame);
  expect(errorMessage).toBe(`Row 1 does not have same size as first row`);
});
test("Grid Validation Start point", () => {
  const example = [["M"], ["M", "L"]];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [3, 0],
    end: [1, 0],
  };

  const errorMessage = validateGridGame(gridGame);
  expect(errorMessage).toBe("Start point is not within grid");
});
