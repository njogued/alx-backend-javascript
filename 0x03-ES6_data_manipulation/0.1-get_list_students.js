export default function getListStudents() {
  const studentList = [];
  studentList.push({
    id: 1,
    firstName: "Guillaume",
    location: "San Francisco",
  });
  studentList.push({ id: 2, firstName: "James", location: "Columbia" });
  studentList.push({ id: 5, firstName: "Serena", location: "San Francisco" });
  return studentList;
}
