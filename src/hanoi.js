//const towers = { 1: [1, 2, 3, 4, 5, 6], 2: [], 3: [] };
//let b = compose(change(1, 2), change(1, 3), change(2, 1), )(towers)

export const moveBlock = (from, to) => (towers) => {
  const [head, ...tail] = towers[from];
  return {
    ...towers,
    [from]: tail,
    [to]: [head, ...towers[to]],
  }
}

export const compose = (...fns) => x => fns.reduce((a, c) => c(a), x)


export const moveCheck = (from, to, towers) =>
towers[to].length ? towers[to][0] > towers[from][0] : true;