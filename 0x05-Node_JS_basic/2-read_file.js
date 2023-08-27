const fs = require("fs");

function countStudents(dtbase) {
  const info = fs.readFileSync(dtbase);
  console.log(info);
}
module.exports = countStudents;
