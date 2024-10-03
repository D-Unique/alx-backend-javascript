export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    array.appendToEachArrayValue(appendString);
  }

  return array;
}
