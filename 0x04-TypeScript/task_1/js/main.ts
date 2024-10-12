interface Teacher {
 firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: any,
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);



function printTeacher(firstName: string, lastName: string): string {
  
  return 

}

interface A {
  firstName: string,
  lastName: string
}

class StudentClass implements A{
  firstName: string
  lastName: string

  constructor() {
    this.firstName = 'firstName'
    this.lastName = 'lastName'
  }

  workOnHomework(): string {
   return 'Currently working'
  }
  displayName(): string {
    return this.firstName
  } 
}
