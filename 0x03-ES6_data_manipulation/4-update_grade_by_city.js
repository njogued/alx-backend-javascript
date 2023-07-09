export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((studentObj) => studentObj.location === city)
    .map((studentObj) => {
      const stuGrade = newGrades.find((grade) => grade.studentId === Object.id);
      const grade = stuGrade === undefined ? 'N/A' : stuGrade.grade;

      return { ...studentObj, grade };
    });
}
