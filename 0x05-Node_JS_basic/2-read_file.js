const { readFileSync } = require('fs');

function countStudents(path) {
  try {
    const data = readFileSync(path, 'utf8');
    const numStudents = data.split('\n').length - 2;
    const lines = data.split('\n');

    console.log(`Number of students: ${numStudents}`);

    const cs = lines.filter((str) => {
      const fields = str.split(',');
      return fields.includes('CS');
    }).map((str) => {
      const names = str.split(',');
      return names[0];
    });

    const swe = lines.filter((str) => {
      const fields = str.split(',');
      return fields.includes('SWE');
    }).map((str) => {
      const names = str.split(',');
      return names[0];
    });

    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    if (err && err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
