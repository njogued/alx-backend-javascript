const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
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
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
