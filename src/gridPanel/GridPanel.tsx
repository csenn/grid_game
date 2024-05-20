import { useEffect, useState } from "react";
import { GridGame } from "../examples/examples";
import { IGridBox, runDjikstras } from "../utils/djikstras";
import { GridView } from "./GridView";
import { Button, Box, Chip, Paper } from "@mui/material";

interface GridPanelProps {
  gridGame: GridGame;
}

export function GridPanel({ gridGame }: GridPanelProps) {
  const [gridBox, setGridBox] = useState<IGridBox | null>(null);

  const onRunDjikstras = () => {
    const finalBox = runDjikstras(gridGame);

    setGridBox(finalBox);
  };

  useEffect(() => {
    setGridBox(null);
  }, [gridGame]);

  return (
    <Box sx={{}}>
      {gridGame && (
        <Box
          sx={{
            paddingBottom: "10px",
            display: "flex",
            padding: "15px",
            // flexDirection: "column",
            gap: "35px",
            borderBottom: "1px solid rgb(230,230,230)",
          }}
        >
          <Box>
            Name: <strong>{gridGame.name}</strong>
          </Box>
          <Box>
            Start Position: [{gridGame.start[0]}, {gridGame.start[1]}]
          </Box>
          <Box>
            End Position: [{gridGame.end[0]}, {gridGame.end[1]}]
          </Box>
        </Box>
      )}

      <Box sx={{ padding: "10px" }}>
        <Button variant="contained" size="small" onClick={onRunDjikstras}>
          Run Dijkstra's algorithm
        </Button>
      </Box>

      {gridBox && (
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Paper
            sx={{
              padding: "10px",
              minWidth: "300px",
              marginBottom: "10px",
              background: "rgb(250,250,250)",
            }}
          >
            <Box sx={{ fontWeight: "bold", padding: "0px 0 10px 0" }}>
              Algorithm Results
            </Box>

            <Box
              sx={{
                paddingBottom: "15px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box>
                Pass:
                {gridBox.pass ? (
                  <Chip
                    sx={{ marginLeft: "5px" }}
                    size="small"
                    label="Yes"
                    color="success"
                  />
                ) : (
                  <Chip
                    sx={{ marginLeft: "5px" }}
                    size="small"
                    label="No"
                    color="error"
                  />
                )}
              </Box>

              <Box>Health Left: {gridBox.health}</Box>

              <Box>Moves Left: {gridBox.moves}</Box>

              <Box>
                Final Position: [{gridBox.point[0]}, {gridBox.point[1]}]
              </Box>
            </Box>
          </Paper>
        </Box>
      )}

      <Box sx={{ padding: "0 10px 50px 10px" }}>
        <GridView gridGame={gridGame} algPath={gridBox ? gridBox.path : []} />
      </Box>
    </Box>
  );
}
