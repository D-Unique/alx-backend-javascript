export default function updateStudentGradeByCity(stulist, city, newGrades) {
  return stulist
    .filter((list) => list.location === city)
    .map((flist) => {
      const getgrade = newGrades.filter(({ studentId }) => flist.id === studentId);
      const { grade = 'N/A' } = getgrade.length > 0 ? getgrade[0] : {};
      return { ...flist, grade };
    });
}
