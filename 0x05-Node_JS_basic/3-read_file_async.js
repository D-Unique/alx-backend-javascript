
const fspromises = require('fs').promises;
const papa = require('papaparse');

async function countStudents(path) {
  try {
    const data = await fspromises.readFile(path, 'utf-8');
    const parsedData = papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    }).data;
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
