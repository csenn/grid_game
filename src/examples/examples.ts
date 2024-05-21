// Should probably use better variable names
import example_one from "./exampleGrids/exampleOne.json";
import example_two from "./exampleGrids/exampleTwo.json";
import example_three from "./exampleGrids/exampleThree.json";
import example_three_a from "./exampleGrids/exampleThreeA.json";
import example_three_b from "./exampleGrids/exampleThreeB.json";
import example_four from "./exampleGrids/exampleFour.json";
import example_five from "./exampleGrids/exampleFive.json";
import example_six from "./exampleGrids/exampleSix.json";
import example_six_a from "./exampleGrids/exampleSixA.json";

export const DEFAULT_WIDTH = 50;

/** 
  Here is the GridGame interface.
  Each grid box has a character of "B", "L", "S", "M"
  The start and end position are kept as separate properties,
  although we could have also added the grid "START" and "END" 
  as an alternative.
  Start and End points must exist within the grid
 */
export interface IGridGame {
  name: string;
  grid: string[][];
  start: number[];
  end: number[];
}

export const allExamples: IGridGame[] = [
  {
    name: "5x5 All Bs",
    grid: example_one,
    start: [0, 0],
    end: [4, 4],
  },
  {
    name: "5x5 All Ss",
    grid: example_two,
    start: [0, 0],
    end: [4, 4],
  },
  {
    name: "15x15 Ls with B Path",
    grid: example_three,
    start: [0, 0],
    end: [example_three.length - 1, example_three[0].length - 1],
  },
  {
    name: "15x15 Ls with B Path Modified Start",
    grid: example_three,
    start: [6, 0],
    end: [10, example_three[0].length - 1],
  },
  {
    name: "15x15 Ls with M Path (can't reach)",
    grid: example_three_a,
    start: [0, 0],
    end: [example_three_a.length - 1, example_three_a[0].length - 1],
  },
  {
    name: "15x15 Ls with B spiral",
    grid: example_three_b,
    start: [0, 0],
    end: [example_three_a.length - 1, example_three_a[0].length - 1],
  },
  {
    name: "25x25 Reaches",
    grid: example_four,
    start: [0, 0],
    end: [example_four.length - 1, example_four.length - 1],
  },
  {
    name: "25x25 Does not Reach",
    grid: example_five,
    start: [0, 0],
    end: [24, 24],
  },
  {
    name: "50x50 Does not Reach",
    grid: example_six,
    start: [0, 0],
    end: [example_six.length - 1, example_six.length - 1],
  },
  {
    name: "50x50 Does Reach (Across)",
    grid: example_six,
    start: [10, 0],
    end: [12, example_six.length - 1],
  },
  {
    name: "50x50 Spiral (Does not reach Moves)",
    grid: example_six_a,
    start: [0, 0],
    end: [example_six_a.length - 1, example_six_a[0].length - 1],
  },
];
