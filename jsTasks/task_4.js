// # Задача:

// Напишіть програму для обчислення середнього балу студента.
// Програма має мати можливість вводити інформацію про студента,
// таку як його ім'я, прізвище та оцінки з різних предметів.
// Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(firstName, lastName, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
}

Student.prototype.calcAvgGrade = function () {
  if (this.grades.length == 0) {
    return "No grades.";
  }

  const sum = this.grades.reduce((acc, grade) => (acc += grade), 0);
  const avg = sum / this.grades.length;
  return avg.toFixed(2);
};

Student.prototype.addGrade = function (grade) {
  if (typeof grade === "number" && grade >= 0 && grade <= 100) {
    this.grades.push(grade);
    console.log(`Grade added successfully.`);
  } else {
    console.log("Invalid grade.");
  }
};

const johnDoe = new Student("John", "Doe");

johnDoe.addGrade(35);
johnDoe.addGrade(62);
johnDoe.addGrade(28);

console.log(
  `${johnDoe.firstName} ${
    johnDoe.lastName
  } has average grade: ${johnDoe.calcAvgGrade()}`
);
