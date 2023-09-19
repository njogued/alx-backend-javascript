export default function getStudentIdsSum(arr) {
  return arr.reduce((currTotal, obj) => currTotal + obj.id, 0);
}
