

export const moveBlock = (from, to) => (towers) => {
  const [head, ...tail] = towers[from];
  return {
    ...towers,
    [from]: tail,
    [to]: [head, ...towers[to]],
  }
}

export const compose = (...fns) => x => fns.reduce((a, c) => c(a), x)