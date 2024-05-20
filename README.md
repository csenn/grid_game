## Grid Game

To build and run
```
npm install
npm start
```

## How it works
A UI should render and load in the browser on `npm start` at http://localhost:3000. The app was scaffolded using create-react-app.


The left sidebar has 2 categories of options to choose from
- one to randomly generate a grid
- the other to use a pre-existing case 


After choosing a grid_game, click `Run Dijkstra's algorithm` to execute the path finding algorithm. It should do it's best to find a path from the start node to the end node. It will say pass if it can reach, and if it can't reach, it will
return the farthest node it was able to get to before running out of health/moves. The path it takes will be in bold. The start node is 
in orange, and the end node in blue.


Dijkstra's algorithm was written in TypeScript and can be found in the utils folder. 


## Run Tests
There are just a few tests currently, but should show the basic pattern. 
```
npm run test
```

## Creating a test case
There are two ways to create a new grid test case. The first would be to modify examples/examples.ts and add a json file
following the same pattern used in that file. The other way would be to create a test case in djikstras.test.ts.


An nice extension could be to add a UI based Dialog that would allow the data to be entered.

### Notes / Discussion Topics
- UI Design is super light
- Used Djikstras, an extension would be to write A* algorithm as well
  - Maximum performance/complexity of Djikstras
  - popCounter was left in to see how many boxes were added the heap
  - Grid has a maximum size of 50x50 with approx 50,000 operations being run. This is a decent amount, but not too bad.
- IGridGame interface
- UI - Material UI and inline styles
  - Using sx in Material UI for the styles, this is more performant than standard "style" tags, but there are pros/cons
  to this approach compared to other styling options
-  Grid Validation
    - start/end are within Grid
    - All cols/rows have same length
    - All letters in grid equal correct label
- Could certainly add more test cases


### Questions
- Is start in calculation? Code assumes the start node does not count in health/moves calculation
- Minimize both Health and Moves, which is a multivariate minimization
  - Since there are 450 moves available and only 200 health, and since every penalty 
    has higher health damage then move damage (except for Blank), health always runs out before moves
- Can start/end only be on edge, or anywhere in GRID