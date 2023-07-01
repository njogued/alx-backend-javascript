export default function createReportObject(employeesList) {
  const allEmp = {};
  for (const [item, val] of Object.entries(employeesList)) {
    allEmp[item] = val;
  }
  const report = {
    getNumberOfDepartments(items) {
      const emps = Object.values(items);
      return emps.length;
    },
  };
  report.allEmployees = allEmp;
  return report;
}
