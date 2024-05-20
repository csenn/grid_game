import { IGridGame } from "../examples/examples";
import { runDjikstras } from "./djikstras";

test("Djikstras - Mud Health", () => {
  const example = [["M"], ["M"], ["M"], ["M"], ["M"]];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [4, 0],
  };

  const result = runDjikstras(gridGame);

  if (!result) {
    throw new Error("Result is expected");
  }

  expect(result.pass).toEqual(true);
  expect(result.health).toEqual(160);
  expect(result.moves).toEqual(430);
});

test("Djikstras - Mud/Lava Health", () => {
  const example = [["M"], ["L"], ["M"], ["M"], ["M"]];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [4, 0],
  };

  const result = runDjikstras(gridGame);

  if (!result) {
    throw new Error("Result is expected");
  }

  expect(result.pass).toEqual(true);
  expect(result.health).toEqual(120);
  expect(result.moves).toEqual(425);
});

test("Djikstras - Fast Path All Bs", () => {
  const example = [
    ["B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B"],
  ];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [example.length - 1, example[0].length - 1],
  };

  const result = runDjikstras(gridGame);

  if (!result) {
    throw new Error("Result is expected");
  }

  expect(result.pass).toEqual(true);
  expect(result.health).toEqual(200);
});

test("Djikstras - Fast Path through Lava", () => {
  const example = [
    ["B", "L", "L", "L", "L"],
    ["B", "L", "L", "L", "L"],
    ["B", "L", "L", "L", "L"],
    ["B", "B", "B", "L", "L"],
    ["L", "L", "B", "B", "B"],
  ];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [example.length - 1, example[0].length - 1],
  };

  const result = runDjikstras(gridGame);

  if (!result) {
    throw new Error("Result is expected");
  }

  expect(result.pass).toEqual(true);
  expect(result.health).toEqual(200);
});

test("Djikstras - Choose Mud of over lava", () => {
  const example = [
    ["M", "L", "L", "L", "L"],
    ["M", "L", "L", "L", "L"],
    ["M", "L", "L", "L", "L"],
    ["M", "M", "M", "L", "L"],
    ["L", "L", "M", "M", "M"],
  ];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [example.length - 1, example[0].length - 1],
  };

  const result = runDjikstras(gridGame);

  if (!result) {
    throw new Error("Result is expected");
  }

  expect(result.pass).toEqual(true);
  expect(result.health).toEqual(120);
});

test("Djikstras - Start = End", () => {
  const example = [["M"], ["M"], ["M"], ["M"], ["M"]];

  const gridGame: IGridGame = {
    name: "test",
    grid: example,
    start: [0, 0],
    end: [0, 0],
  };

  const result = runDjikstras(gridGame);

  if (!result) {
    throw new Error("Result is expected");
  }

  expect(result.pass).toEqual(true);
  expect(result.health).toEqual(200);
  expect(result.moves).toEqual(450);
});
