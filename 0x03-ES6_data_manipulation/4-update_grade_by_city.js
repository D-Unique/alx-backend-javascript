export default function updateStudentGradeByCity(list, city, newGrades) {
    const flist = list.filter((list) => list.location === city)
    return flist.map((flist) =>  {
        newGrades.map((sGrade) => {
            if (sGrade.studentId === flist.id) {
                flist.grade = sGrade.grade
            } 
            if (!flist.hasOwnProperty('grade')) {
                flist.grade = 'N/A';
            }
            return flist

        })
        return flist
    })

}
