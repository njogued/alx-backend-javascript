export default function getStudentIdsSum(students) {
  return students.reduce((sum, n) => sum + n.id, 0);
}
