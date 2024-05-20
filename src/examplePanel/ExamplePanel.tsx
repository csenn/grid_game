import { Button } from "@mui/material";
import { DEFAULT_WIDTH, GridGame } from "../examples/examples";
import Box from "@mui/material/Box";
import { generateRandomGrid } from "../utils/generateRandom";

type ExamplePanelProps = {
  examples: GridGame[];
  onChooseExample: (example: GridGame) => void;
};

export function ExamplePanel({ examples, onChooseExample }: ExamplePanelProps) {
  const onGenerate = (amount: number) => {
    const gridGame: GridGame = {
      name: "Random",
      grid: generateRandomGrid(amount, amount),
      start: [0, 0],
      end: [amount - 1, amount - 1],
    };

    onChooseExample(gridGame);
  };

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "20px",
        paddingLeft: "10px",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Box sx={{ fontWeight: "bold" }}>Generate Random Grids</Box>
      <Box>
        <Button size="small" variant="outlined" onClick={() => onGenerate(5)}>
          Generate Random 5x5
        </Button>
      </Box>

      <Box>
        <Button size="small" variant="outlined" onClick={() => onGenerate(25)}>
          Generate Random 25x25
        </Button>
      </Box>

      <Box>
        <Button size="small" variant="outlined" onClick={() => onGenerate(50)}>
          Generate Random 50x50
        </Button>
      </Box>

      <Box sx={{ fontWeight: "bold", marginTop: "20px" }}>Example Grids</Box>

      {examples.map((example) => (
        <Box
          sx={{
            padding: "5px 10px",
            cursor: "pointer",
            color: "rgb(100,100,100)",
            ":hover": {
              color: "rgb(30,30,30)",
            },
          }}
          key={example.name}
          onClick={() => onChooseExample(example)}
        >
          {example.name}
        </Box>
      ))}
    </Box>
  );
}
