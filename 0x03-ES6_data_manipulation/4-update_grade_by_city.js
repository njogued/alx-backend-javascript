export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  newGrades.forEach((newGrade) => {
    studentsList.map((student) => {
      let newStudent;
      const grade = newGrade.grade;
      if (newGrade.studentId === student.id) {
        newStudent = { ...student, grade };
      } else {
	newStudent = { ...student, grade: 'N/A' };
      }
      return newStudent;
    });
  });
}
