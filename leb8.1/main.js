// Перший обєкт
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

// 2

function DAI(code, ownerName, carBrand, carNumber, carColor) {
    this.code = code;
    this.ownerName = ownerName;
    this.carBrand = carBrand;
    this.carNumber = carNumber;
    this.carColor = carColor;

    this.getInfo = function() {
        console.log(Код: ${this.code}; Власник: ${this.ownerName}; Марка авто: ${this.carBrand}; Номер авто: ${this.carNumber}; Колір авто: ${this.carColor});
    }
}

// приклад створення об'єкту
const dai1 = new DAI(1, "Іван Іванов", "Ford", "ВЕ1234АС", "сірий");
dai1.getInfo(); // викликаємо метод для виведення інформації про об'єкт

//3

function Company(code, name, employees, industry, address) {
    this.code = code;
    this.name = name;
    this.employees = employees;
    this.industry = industry;
    this.address = address;

    this.getInfo = function() {
        console.log(`Код: ${this.code}; 
    Назва: ${this.name}; 
    Кількість співробітників: ${this.employees}; 
    Галузь: ${this.industry}; 
    Адреса: ${this.address}`);
    }
}

// приклад створення об'єкту
const company1 = new Company(1, "Acme Inc.", 100, "Інформаційні технології", "вул. Київська, 123");
company1.getInfo(); // викликаємо метод для виведення інформації про об'єкт