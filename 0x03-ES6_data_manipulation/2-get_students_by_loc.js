export default function getListStudentsByLocation(students, city) {
  const studentsLocation = students.filter(
    (student) => student.location === city
  );
  return studentsLocation;
}
