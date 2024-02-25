//Задача 27: Вывести квадраты чисел от 1 до 5 с использованием цикла for.

// for (let i = 1; i <= 5; i++) {
//     let square = i * i;
//     console.log(`Квадрат числа ${i}: ${square}`);
//   }




//Задача 28: Вывести числа от 1 до 100, которые делятся на 5 без остатка, с использованием цикла while.


// let number = 1;

// while (number <= 100) {
//     if (number % 5 === 0) {
//         console.log(number);
//     }
//     number++;
// }



//Задача 29: Вывести таблицу умножения на 3 с использованием цикла for.

// for (let i = 1; i <= 10; i++) {
//     let result = 3 * i;
//     console.log(`3 * ${i} = ${result}`);
//   }


//Задача 30: Вывести числа от 1 до 50, которые делятся и на 3, и на 5 без остатка, с использованием цикла while.

// let number = 1;

// while (number <= 50) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log(number);
//     }
//     number++;
// }


//Задача 31: Посчитать сумму нечетных чисел от 1 до 15 с использованием цикла for.

// let sumOdd = 0;

// for (let i = 1; i <= 15; i += 2) {
//     sumOdd += i;
// }

// console.log("Сумма нечетных чисел от 1 до 15: " + sumOdd);


//Задача 32: Найти сумму всех чисел, кратных 3 или 5, в диапазоне от 1 до 100.

// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }

// console.log("Сумма всех чисел, кратных 3 или 5, в диапазоне от 1 до 100:", sum);



//Задача 33: Вывести все числа от 1 до 100, которые делятся на 7 без остатка, но не делятся на 5.

// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0 && i % 5 !== 0) {
//       console.log(i);
//     }
//   }


// Задача 34: Посчитать сумму всех цифр в числе 123456789.

// const number = 123456789;
// let sum = 0;
// const numberString = number.toString();
// for (let i = 0; i < numberString.length; i++) {
//   sum += parseInt(numberString[i]);
// }
// console.log("Сумма всех цифр в числе", number, "равна", sum);


//Задача 35: Вывести все простые числа от 1 до 100.

// for (let num = 2; num <= 100; num++) {
//   let elementaryNum = true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       elementaryNum = false;
//       break;
//     }
//   }
//   if (elementaryNum) {
//     console.log(num);
//   }
// }



//Задача 36: Вывести все числа от 1 до 1000, сумма цифр которых равна 10.

// for (let number = 1; number <= 1000; number++) {
//     let sum = 0;
//     let currentNumber = number;
//     while (currentNumber > 0) {
//       sum += currentNumber % 10;
//       currentNumber = Math.floor(currentNumber / 10);
//     }
//     if (sum === 10) {
//       console.log(number);
//     }
//   }


//

//Задача 37: Посчитать сумму первых 10 членов последовательности Фибоначчи.


// let sum = 0;
// let a = 0;
// let b = 1;

// for (let i = 0; i < 10; i++) {
//     sum += a;
//     let temp = a + b;
//     a = b;
//     b = temp;
// }

// console.log("Сумма первых 10 членов последовательности Фибоначчи:", sum);

//Задача 38: Найти факториал числа 10.

// let result = 1;

// for (let i = 1; i <= 10; i++) {
//   result *= i;
// }

// console.log(result);


//Задача39: Посчитать сумму квадратов первых 10 натуральных чисел.


// let sumOfSquares = 0;

// for (let i = 1; i <= 10; i++) {
//   sumOfSquares += i * i;
// }

// console.log(sumOfSquares);


//Задача 40: Посчитать сумму чисел в следующей последовательности: 1, -2, 3, -4, 5, -6, ..., 99, -100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {       
//         sum += i;
//     } else {      
//         sum -= i;
//     }
// }
// console.log(sum);

//Задача 41: Вывести таблицу умножения от 1 до 10.


// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log('');
// }



