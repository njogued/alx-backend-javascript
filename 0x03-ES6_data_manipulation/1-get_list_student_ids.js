export default function getListStudentIds(students) {
  let studentIds = [];
  if (Array.isArray(students)) {
    studentIds = students.map(({ id }) => id);
  }
  return studentIds;
}
