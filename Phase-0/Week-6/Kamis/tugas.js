class Student {
  constructor(name, age, dateOfBirth, gender, studentId, hobbies) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.studentId = studentId;
    this.hobbies = hobbies;
  }

  setName(name) {
      this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  setGender(gender) {
    if (gender == 'Male') {
      this.gender = gender;
    } else if (gender == 'Female') {
      this.gender = gender;
    }
  }

  addHobby(hobbies) {
    this.hobbies.push(hobbies);
  }

  removeHobby(hobbies) {
    for (var i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobbies) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  getName() {
    return this.name;
  }

  getData() {
    return  'Name : ' + this.name +
            ', Age : ' + this.age +
            ', Date of Birth : ' + this.dateOfBirth +
            ', Gender : ' + this.gender +
            ', Student ID : ' + this.studentId +
            ', Hobbies : ' + this.hobbies;
  }
}

let me = new Student('Rifqi Anugrah', 24, '04-06-1993', 'Male', 'ReffQi', ['Coding', 'Photography']);
// me.setName('RFQ');
console.log(me.name);
// me.addHobby('Automotive');
// me.removeHobby('Coding');
console.log(me.getData());
