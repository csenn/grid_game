const OPTIONS = ["B", "S", "L", "M"];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function generateRandomGrid(rows: number, cols: number): string[][] {
  const result: string[][] = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      result[i].push(OPTIONS[getRandomInt(4)]);
    }
  }

  return result;
}
