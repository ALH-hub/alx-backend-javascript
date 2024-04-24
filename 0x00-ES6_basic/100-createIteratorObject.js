export default function createIteratorObject(report) {
  const employees = [].concat(...Object.values(report.allEmployees));
  return employees[Symbol.iterator]();
}
