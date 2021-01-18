

const towers = { 1: [1, 2, 3, 4, 5, 6], 2: [], 3: [] }; // the first position of the array is the top of the tower

const changePos = (from, to) => (towers) => ({
  ...towers,
  [from]:(([, ...t]) => t)(towers[from]),
  [to]: [...towers[to], (([h]) => h)(towers[from])],
});

//let a = changePos(1, 2)(towers);
//console.log(a);
//a = changePos(1, 3)(a);
//console.log(a);


var change = (from, to) => (towers) => {
  const [head, ...tail] = towers[from];
  return {
    ...towers,
    [from]: tail,
    [to]: [head, ...towers[to]],
  }
}

const compose = (...fns) => x => fns.reduce((a, c) => c(a), x)
let b = compose(change(1, 2), change(1, 3), change(2, 1), )(towers)
console.log(b)
