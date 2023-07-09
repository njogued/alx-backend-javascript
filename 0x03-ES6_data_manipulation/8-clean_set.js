export default function cleanSet(set, startString) {
  if (!startString || !set || startString.length === 0) {
    return "";
  }
  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join("-");
}
