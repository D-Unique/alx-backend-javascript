export default function updateUniqueItems(arg) {
  if (!(arg instanceof Map)) throw new Error('Cannot process');

  arg
    .forEach((value, key) => {
      if (value === 1) arg.set(key, 100);
    });
  return arg;
}
