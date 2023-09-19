const express = require('express');
const { readFile } = require('fs');

const port = 1245;
const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      let output;
      if (err) {
        reject(err);
      } else {
        output = '';
        const numStudents = data.split('\n').length - 2;
        const lines = data.split('\n');

        output += 'This is the list of our students\n';
        output += `Number of students: ${numStudents}\n`;

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

        output += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
        output += `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const file = process.argv[2];

  countStudents(file).then((data) => {
    res.send(data);
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port);

module.exports = app;
