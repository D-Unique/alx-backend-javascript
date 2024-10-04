export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof (name) === String) {
      return this._name = name;
    }
    console.error(`${name} must be a string`);
  }

  set length(length) {
    if (typeof (length) === Number) {
      return this._length = length;
    }
    console.error(`${length} must be a number`);
  }

  set students(students) {
    if (typeof (students) === Array) {
      return this._students = students;
    }
    console.error(`${students} must be a number`);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
