export default function updateStudentGradeByCity(array, city, newGrades) {
  if (Array.isArray(array) || Array.isArray(newGrades) || typeof city !== 'string') {
    return array.filter((student) => student.location === city).map((student) => {
      const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
      return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
    });
  }
  return [];
}
