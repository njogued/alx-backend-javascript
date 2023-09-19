export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((el) => el.id);
  }
  return [];
}
