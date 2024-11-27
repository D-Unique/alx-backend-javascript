const papa = require('papaparse');
const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const result = papa.parse(data, {
      header: true,
      skipEmptyLines: true,
    }).data;

    console.log(`Number of students: ${result.length}`);
    const numberOfCsStudentList = [];
    const numberOfSweStudentList = [];
    result.forEach((element) => ((element.field === 'CS') ? numberOfCsStudentList.push(element.firstname) : numberOfSweStudentList.push(element.firstname)));
    console.log(`Number of students in CS: ${numberOfCsStudentList.length}. List: ${numberOfCsStudentList.join(', ')} `);
    console.log(`Number of students in SWE: ${numberOfSweStudentList.length}. List: ${numberOfSweStudentList.join(', ')} `);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
