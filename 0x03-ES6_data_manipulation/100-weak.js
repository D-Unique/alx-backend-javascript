export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let value = (weakMap.get(endpoint) || 0);
  if (value >= 5) throw new Error('Endpoint load is high');
  value += 1;
  weakMap.set(endpoint, value);
}
