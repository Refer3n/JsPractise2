// # Задача:

// Створити об'єкт "Студент" з методами для додавання та видалення предметів, 
// які він вивчає.

const student = {
    subjects: [],

    addSubject(newSubject) {
        if(this.subjects.includes(newSubject)) {
            console.log(`You are already studying subject: "${newSubject}".`);
        }
        else {
            this.subjects.push(newSubject);
            console.log(`Subject: "${newSubject}" added successfully.`);
        }
    },
    removeSubject(subjectToRemove) {
        if(!this.subjects.includes(subjectToRemove)) {
            console.log(`You are not studying subject: "${subjectToRemove}."`);
            return;
        }

        const subjectToRemoveIndex = this.subjects.indexOf(subjectToRemove);
        this.subjects.splice(subjectToRemoveIndex, 1);

        console.log(`Subject: "${subjectToRemove}" removed successfully.`);
    }
};

// Дані для перевірки:
student.addSubject("Математика"); // Предмет Математика додано.
student.addSubject("Історія"); // Предмет Історія додано.
student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject("Історія"); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject("Англійська"); 