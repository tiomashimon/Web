class Accounting {
    constructor(code, fullName, position, salary, childrenCount, experience) {
        this.code = code;
        this.fullName = fullName;
        this.position = position;
        this.salary = salary;
        this.childrenCount = childrenCount;
        this.experience = experience;
    }
}

class AccountingCollection {
    constructor() {
        this.items = [];
    }

    add(accounting) {
        this.items.push(accounting);
    }

    addRange(accountings) {
        this.items.push(...accountings);
    }

    edit(code, newData) {
        const index = this.findIndexByCode(code);
        if (index !== -1) {
            Object.assign(this.items[index], newData);
        }
    }

    remove(code) {
        const index = this.findIndexByCode(code);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getOne(code) {
        const index = this.findIndexByCode(code);
        return index !== -1 ? this.items[index] : null;
    }

    getFilteredByPositionAndChildrenCount(position, childrenCount) {
        return this.items.filter(
            (accounting) =>
                accounting.position === position &&
                accounting.childrenCount <= childrenCount
        );
    }

    findIndexByCode(code) {
        return this.items.findIndex((accounting) => accounting.code === code);
    }
}


const accountingCollection = new AccountingCollection();

// Додавання об'єктів
accountingCollection.add(
    new Accounting("A01", "John Doe", "Accountant", 3000, 2, 5)
);
accountingCollection.add(
    new Accounting("A02", "Jane Doe", "Accountant", 2500, 0, 3)
);
accountingCollection.add(
    new Accounting("A03", "Bob Smith", "Manager", 5000, 1, 10)
);

console.log("Додано об'єкти:");
console.log(accountingCollection.items);

// Редагування інформації про об'єкт
accountingCollection.edit("A02", { salary: 2800 });
console.log("Редаговано об'єкт A02:");
console.log(accountingCollection.getOne("A02"));

// Видалення об'єкта
accountingCollection.remove("A03");
console.log("Видалено об'єкт A03:");
console.log(accountingCollection.items);

// Отримання інформації щодо одного об'єкта
const accounting = accountingCollection.getOne("A01");
console.log("Отримано інформацію про об'єкт A01:");
console.log(accounting);

// Отримання вибірки з колекції
const filtered = accountingCollection.getFilteredByPositionAndChildrenCount(
    "Accountant",
    2
);
console.log("Фільтрована колекція:");


console.log(filtered);
