function Accountant(code, fullName, position, salary, numOfChildren, experience) {
    this.code = code;
    this.fullName = fullName;
    this.position = position;
    this.salary = salary;
    this.numOfChildren = numOfChildren;
    this.experience = experience;

    this.getInfo = function() {
        console.log(`Код: ${this.code}, ПІБ: ${this.fullName}, Посада: ${this.position}, ЗП: ${this.salary}, Кількість дітей: ${this.numOfChildren}, Стаж: ${this.experience}`);
    }
}

const accountant1 = new Accountant(1, "Іванов Іван Іванович", "Головний бухгалтер", 10000, 2, 5);
const accountant2 = new Accountant(2, "Петров Петро Петрович", "Старший бухгалтер", 8000, 1, 3);
const accountant3 = new Accountant(3, "Сидорова Ольга Василівна", "Бухгалтер", 5000, 0, 1);

accountant1.getInfo();
accountant2.getInfo();
accountant3.getInfo();
