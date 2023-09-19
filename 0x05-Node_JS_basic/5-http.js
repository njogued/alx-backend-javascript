const http = require('http');
const { readFile } = require('fs');

const port = 1245;
const host = 'localhost';

function countStudents(path, res) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const numStudents = data.split('\n').length - 2;
        const lines = data.split('\n');

        res.write(`Number of students: ${numStudents}\n`);

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

        res.write(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`);
        res.write(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
        resolve(data);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    const file = process.argv[2];
    res.write('This is the list of our students\n');

    countStudents(file, res).then(() => {
      res.end();
    }).catch(() => {
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {});

module.exports = app;
