import React, { useState } from 'react';
import { IGridGame, allExamples } from './examples/examples';
import { ExamplePanel } from './examplePanel/ExamplePanel';
import {GridPanel} from './gridPanel/GridPanel'
import {  Box} from "@mui/material"

function App() {

  // Keep things simple and keep state in app component
  // In a larger application, React.Context or a data management library could be used
  const [selectedExample, setSelectedExample] = useState<IGridGame |null>(null)

  return (
    <Box sx={{display: 'flex', height: '100vh', width: '100vw'}}>
      <Box sx={{width: '300px', minWidth: '300px', borderRight: '1px solid rgb(230,230,230)'}}>
        <ExamplePanel examples={allExamples} onChooseExample={setSelectedExample} />
      </Box>

      <Box sx={{overflow: 'scroll', flexGrow: 1}}> 
        {selectedExample ? (
          <GridPanel gridGame={selectedExample} />
        ): (
          <Box sx={{padding: '50px'}}>
            <strong>Instructions</strong>: Either generate a grid or choose a pre-built grid from the sidebar.
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
