export default function getListStudentIds(students) {
  let studentIds = [];
  if (Array.isArray(students)) {
    return students.map(({ id }) => id);
  }
  return studentIds;
}
