export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const val = weakMap.get(endpoint);
  if (val < 5) {
    weakMap.set(endpoint, val + 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}
