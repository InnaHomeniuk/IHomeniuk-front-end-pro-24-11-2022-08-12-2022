console.group('Домашнє завдання №10');
const arrayStudents = ['Петров', 'Кулинич', 'Степаненко', 'Скрипка', 'Данилова', 'Сокирко', 'Андрєєва', 'Фролова', 'Кобець', 'Сівак'];
console.log('Масив з 10х студентів', arrayStudents);
arrayStudents.push('Смурова');
arrayStudents.push('Заєць');
console.log('1.Додати 2 студенти в кінець масиву', arrayStudents);
arrayStudents.unshift('Мегеря');
arrayStudents.unshift('Донін');
console.log('2.	Додати 2 студенти на початок масиву', arrayStudents);
arrayStudents.pop();
console.log('3.Видалити останнього студента', arrayStudents);
arrayStudents.shift();
console.log('4.	Видалити першого студента', arrayStudents);
const nameStudent = prompt('Уведіть ім`я студента', '');
const included = arrayStudents.includes(nameStudent);
console.log(`Студент ${nameStudent} присутній у списку: ${included}`);
const twoStudents = arrayStudents.slice(3, 7);
console.log('6.	Створити ще один масив з існуючого, включивши в нього студентів починаючи з індекса 3 і закінчуючи індексом 6 включно ( 3,4,5,6)', twoStudents);
const thirdStudents = ['Федотенко', 'Циганок', 'Гордієнко', 'Онищенко', 'Данилович'];
const allStudents = arrayStudents.concat(thirdStudents);
console.log('7.	Створити ще один масив нових студентів(довжина 5), і об’єднати існуючих студентів з новими у новий масив усі студенти', allStudents);
allStudents.splice(3, 1);
console.log('8.	Видалити студента номер 4', allStudents);
allStudents.splice(5, 1, 'Іван');
console.log('9.	Замінити студента номер 6 на студента з ім`ям Іван', allStudents);
console.log('10.Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире -', allStudents.join(' - '));
console.groupEnd();