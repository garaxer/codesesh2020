const { networkInterfaces } = require("os");

const towers = { 1: [1, 2, 3, 4, 5, 6], 2: [], 3: [] }; // the first position of the array is the top of the tower

const changePos = (from, to) => (towers) => ({
  ...towers,
  [from]:(([, ...t]) => t)(towers[from]),
  [to]: (([h]) => h)(towers[from]),
});

let a = changePos(1, 2)(towers);

console.log(a);
