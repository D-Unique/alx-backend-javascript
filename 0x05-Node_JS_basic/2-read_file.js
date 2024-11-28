const fs = require('fs');
const Papa = require('papaparse');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;
      const fields = {};
      parsedData.forEach((student) => {
        const { field } = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student.firstname);
      });
      console.log(`Number of students: ${parsedData.length}`);
      for (const field in fields) {
        if (field in fields) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    }
  });
}
module.exports = countStudents;
