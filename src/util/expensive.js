export const expensiveFunc = (number) => {
  let rnd;

  for (let index = 0; index < 2e8; index++) {
    rnd = Math.random()
  }

  return rnd + number;
}
