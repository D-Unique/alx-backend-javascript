export default function createInt8TypedArray(length, postion, value) {
  if (postion > length) throw new Error('Position outside range');

  const int8 = new Int8Array(length);

  const newitem = int8.fill(value, postion, postion + 1);

  return new DataView(newitem.buffer);
}
