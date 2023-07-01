export default function createIteratorObject(report) {
  //   const emps = [];
  const depts = report.allEmployees;
  const emps = [].concat(...Object.values(depts));
  //   for (const[item, value] of Object.entries(depts)) {

  //   }
  //   for (const dept in report.allEmployees) {
  //     console.log(dept);
  //     for (const emp in dept.values()) {
  //       emps.push(emp);
  //       console.log(emp);
  //     }
  //   }
  return emps;
}
