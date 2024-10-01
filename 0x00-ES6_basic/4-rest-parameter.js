export default function returnHowManyArguments(...args) {
  let counter = 0;
  for (const arg of args) {
    counter += arg;
  }
  return counter;
}
