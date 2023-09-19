export default function createIteratorObject(report) {
  const employees = [];
  const { allEmployees } = report;

  for (const el in allEmployees) {
    if (Object.hasOwn(allEmployees, el)) {
      employees.push(allEmployees[el]);
    }
  }
  return employees.flat()[Symbol.iterator]();
}
