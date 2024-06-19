const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8').trim();
  const lines = data.split('\n').filter(Boolean); // Remove empty lines
  console.log(`Number of students: ${lines.length - 1}`); // Exclude header line

  const fields = {};
  for (const line of lines.slice(1)) { // Exclude header line
    const student = line.split(',');
    if (!fields[student[3]]) {
      fields[student[3]] = [];
    }
    fields[student[3]].push(student[0]);
  }

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
