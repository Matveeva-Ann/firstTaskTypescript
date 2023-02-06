// Завдання 1.
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// Створіть змінну city з типом даних string.
// Присвойте їй значення «Київ».
// Змініть значення змінної city на «Львів».
// Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.
// Вивести значення змінної address з допомогою команди console.log().
// let city: string;
// city = '«Київ»';
// city = '«Львів»';
// let address: string;
// address = city;
// console.log(address)
// Завдання 2.
// Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, а потім виводить в console.log() повідомлення:
// Число парне.
// Число непарне.
// Число 0.
// let data: any = prompt("введіть число");
// let num: number = Number(data);
// function checkNumb(num) {
//   num === 0
//     ? console.log(`ви ввели 0`)
//     : num % 2 === 0
//     ? console.log(`ви ввели парне число`)
//     : console.log(`ви ввели не парне число`);
// }
// data !== null && data !== "" && (num || num === 0) 
//   ? checkNumb(num)
//   : isNaN(num)
//   ? console.log("введіть число")
//   : console.log("введіть дані в поле");
// Завдання 3.
// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// max(5,-2) – має повернути 5.
// max(5,-2, 30, 6) – має повернути 30
// function maxNumb (...arg:Array<number>):number{
//     arg.sort((a,b) => a-b);
//     return arg[arg.length-1];
// }
// console.log(maxNumb(5,-2));
// console.log(maxNumb(5, -2, 30, 6));
// або
// function maxNumb(...arg: Array<number>): number{
//     let maxNumb = arg[0];
//     for(let i=0; i<arg.length; i++){
//        maxNumb = maxNumb<arg[i]? arg[i] : maxNumb;
//     }
//     return maxNumb;
// }
// console.log(maxNumb(5,-2));
// console.log(maxNumb(5, -2, 30, 6));
// Завдання 4. 
// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:
// Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// Якщо передали не число - Повинно бути числове значення.
// Якщо число менше 0 - Введіть додатнє число.
// Якщо в функцію нічого не передали - Будь ласка, введіть число!
// function getSqrt(numb: number): void {
//   if (numb > 0) {
//     let sqrt = Math.sqrt(numb);
//     console.log(` Квадратний корінь з ${numb} дорівнює ${sqrt}`);
//   } else {
//     console.log ("Введіть додатнє число");
//   }
// }
// const data: any = prompt("введіть число");
// const numb: number = Number(data);
// data === null || data === ""
// ? console.log("Будь ласка, введіть число!")
// : isNaN(numb)
// ? console.log("Повинно бути числове значення")
// : getSqrt(numb);
