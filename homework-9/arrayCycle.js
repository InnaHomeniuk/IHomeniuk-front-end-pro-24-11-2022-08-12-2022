console.group('Домашнє завдання №9');
const arrayNumbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
let sum = 0;
let sumPositive = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > 0) {
        sumPositive = sumPositive + 1;
        sum = sum + arrayNumbers[i];
    }
}
console.log(`Сумма елементів: ${sum}, кількість позитивних елементів: ${sumPositive}`);


let min = arrayNumbers[0];
let index = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < min) {
        min = arrayNumbers[i];
        index = i;
    }
}
console.log(`Мінімальне значення: ${min}, його порядковий номер: ${index}`);

let max = arrayNumbers[0];
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > max) {
        max = arrayNumbers[i];
        index = i;
    }
}
console.log(`Максимальне значення: ${max}, його порядковий номер: ${index}`);

let sumNegative = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < 0) {
        sumNegative = sumNegative + 1;
    }
}
console.log(`Кількість негативних елементів: ${sumNegative}`);

let multPositive = 1;
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > 0) {
        multPositive = multPositive * arrayNumbers[i];
    }
}
console.log(`Добуток позитивних елементів: ${multPositive}`);

console.groupEnd();