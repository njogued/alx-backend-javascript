export default function getListStudentsByLocation(students) {
  const studentsLocation = students.filter(
    (student) => student.location === "San Francisco"
  );
  return studentsLocation;
}
