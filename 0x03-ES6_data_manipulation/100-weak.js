export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const value = (weakMap.get(endpoint) || 0) + 1;
  if (value >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, value);
}
