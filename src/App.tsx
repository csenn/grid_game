import React, { useState } from 'react';
import { GridGame, allExamples } from './examples/examples';
import { ExamplePanel } from './examplePanel/ExamplePanel';
import {GridPanel} from './gridPanel/GridPanel'
import {  Box} from "@mui/material"

function App() {

  const [selectedExample, setSelectedExample] = useState<GridGame |null>(null)

  return (
    <Box sx={{display: 'flex', height: '100vh', width: '100vw'}}>
      <Box sx={{width: '300px', minWidth: '300px', borderRight: '1px solid rgb(230,230,230)'}}>
        <ExamplePanel examples={allExamples} onChooseExample={setSelectedExample} />
      </Box>

      <Box sx={{overflow: 'scroll', flexGrow: 1}}> 
        {selectedExample && (
          <GridPanel gridGame={selectedExample} />
        )}
      </Box>
    </Box>
  );
}

export default App;
