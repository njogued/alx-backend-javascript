export default function iterateThroughObject(reportWithIterator) {
  let str = '';

  for (const employee of reportWithIterator) {
    str += `${employee} | `;
  }
  return str.slice(0, -3);
}
