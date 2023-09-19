export default function hasValuesFromArray(set, array) {
  return array.map((num) => set.has(num)).every((bool) => bool === true);
}
