const papa = require('papaparse');
const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const result = papa.parse(data, {
      headers: true,
      skipEmptyLines: true,
    }).data;
    console.log(`Number of students: ${result.length}`);
    const numberOfCsStudentList = [];
    const numberOfSweStudentList = [];
    result.forEach((element) => {
      if (element[0] === 'firstname') {
        return numberOfCsStudentList;
      }

      return element[element.length - 1] === 'CS' ? numberOfCsStudentList.push(element[0]) : numberOfSweStudentList.push(element[0]);
    });
    console.log(`Number of students in CS: ${numberOfCsStudentList.length}. List: ${numberOfCsStudentList} `);
    console.log(`Number of students in SWE: ${numberOfSweStudentList.length}. List: ${numberOfSweStudentList} `);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
