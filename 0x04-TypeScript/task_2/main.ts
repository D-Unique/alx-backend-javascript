interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string 
    workDirectorTasks(): string
}


interface TeacherInterface {

    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}


class Director implements DirectorInterface {
    workFromHome():   
   string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  


function createEmployee(salary: number | string): Director  | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    
      } else {
        return new Director();
      }
    
}

function isDirector(employee: DirectorInterface | TeacherInterface): DirectorInterface | TeacherInterface{
    return employee;
  }
  
function executeWork(employee: DirectorInterface | TeacherInterface) {
    if (isDirector(employee)) {
      employee
    } else {
      employee;
    }
  }

  type Subjects = "Math" | "History";

  function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
      case "Math":
        return "Teaching Math";
      case "History":
        return "Teaching History";
      default:
        throw new Error("Invalid subject");   
  
    }
  }
  