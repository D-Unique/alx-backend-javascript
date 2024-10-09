interface Student {
    firstName: string,
    lastName: string,
    age: number, 
    location: string
    

} 
const me: Student = {
    firstName:'Emma',
    lastName: 'unigwe',
    age: 30,
    location: 'Nigeria'
}

const you: Student = {
    firstName:'John',
    lastName: 'doe',
    age: 15,
    location: 'South Africa'
}


let studentsList= [ me, you];

const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(student => {

        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.lastName;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
     
   });
   

