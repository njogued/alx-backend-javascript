export default function updateUniqueItems(myMap) {
  try {
    const list = Array.from(myMap.keys());

    return list
      .filter((item) => myMap.get(item) === 1)
      .map((item) => myMap.set(item, 100));
  } catch (err) {
    throw new Error("Cannot process");
  }
}
