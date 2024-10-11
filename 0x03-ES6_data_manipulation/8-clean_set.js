export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') return '';

  const filteredElements = Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length));

  return filteredElements.join('-');
}
