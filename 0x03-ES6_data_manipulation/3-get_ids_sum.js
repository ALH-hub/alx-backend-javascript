export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    return array.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
