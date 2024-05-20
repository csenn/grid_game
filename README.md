## Grid Game

To build and run
```
npm install
npm start
```

## How it works
A UI should render and load in the browser on `npm start`. The app was scaffolded using create-react-app.


The left sidebar has 2 categories of options to choose from
- one to randomly generate a grid
- use a pre-existing case 


After choosing a grid_game, click `Run Dijkstra's algorithm` to execute the path finding algorithm. It should do it's best to find a path from the start node to the end node. It will say pass if it can reach, and if it can't reach it will
return the farthest node it was able to get to before running out of health/moves. The path it takes will be in bold.


Dijkstra's algorithm was written in TypeScript and can be found in the utils folder. 


## Run Tests
```
npm run test
```

### Notes / Discussion Topics
- UI Design is super light
- Start/End configuration
- A* algorithm as well
  - Maximum performance/complexity of Djikstras
  - popCounter was left in to see how many boxes were added the heap
- Input Boxes 
- Ui - Material UI and inline styles
  - Could do better work with css, just going quick for this demo
-  Validate in validate.ts
  - start/end are within Grid
  - All cols/rows have same length
  - All letters in grid equal correct label


### Questions
- Is start in calculation? Code assumes the start node does not count in health/moves calculation
- Minimize both Health and Moves, which is a multivariate minimization
  - Since there are 450 moves available and only 200 health, and since every penalty 
has higher health damage then move damage, health will always run out before moves.
- Can start/end only be on edge, or anywhere in GRID