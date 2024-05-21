import { useCallback } from "react";
import { IGridGame } from "../examples/examples";
import Box from "@mui/material/Box";

interface GridViewProps {
  gridGame: IGridGame;
  algPath: number[][];
}

const pointToString = (point: number[]) => point[0] + "_" + point[1];

export function GridView({ gridGame, algPath }: GridViewProps) {
  const pathSet = new Set();

  algPath.forEach((el) => {
    pathSet.add(pointToString(el));
  });

  // Could memoize this with gridGame instance
  const getBackground = useCallback(
    (i: number, j: number) => {
      if (i === gridGame.start[0] && j === gridGame.start[1]) {
        return "orange";
      }

      if (i === gridGame.end[0] && j === gridGame.end[1]) {
        return "lightblue";
      }
    },
    [gridGame],
  );

  return (
    <Box sx={{ minWidth: "800px" }}>
      {gridGame.grid.map((row, i) => (
        <Box sx={{ display: "flex" }}>
          {row.map((col, j) => (
            <Box
              sx={{
                fontWeight: pathSet.has(pointToString([i, j])) ? "700" : "300",
                fontSize: "12px",
                width: "20px",
                padding: "5px 0",
                textAlign: "center",
                background: getBackground(i, j),
                border: " 0.5px solid rgb(230,230,230)",
              }}
            >
              {i === gridGame.start[0] && j === gridGame.start[1] ? '@': col}
              
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
