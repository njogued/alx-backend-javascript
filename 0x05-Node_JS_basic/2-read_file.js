const fs = require("fs");

function countStudents(dtbase) {
  try {
    const info = fs.readFileSync(dtbase, "utf-8");
    const lines = info.split("\n");
    // const headers = lines[0].split(",").map((header) => header.trim());
    const records = {};
    console.log(`Number of students: ${lines.length - 1}`);

    // Loop through the lines (skipping the header)
    for (let i = 1; i < lines.length; i++) {
      const fields = lines[i].split(",").map((field) => field.trim());
      const firstName = fields[0];
      const fieldOfStudy = fields[3];
      // Check if the fieldOfStudy is already a key in the dictionary
      if (!records[fieldOfStudy]) {
        records[fieldOfStudy] = [];
      }
      // Add the first name to the appropriate fieldOfStudy entry
      records[fieldOfStudy].push(firstName);
    }
    for (const field in records) {
      const studentCount = records[field].length;
      const studentList = records[field].join(", ");
      console.log(
        `Number of students in ${field}: ${studentCount}. List: ${studentList}`
      );
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}
module.exports = countStudents;
