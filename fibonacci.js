const { memoryUsage } = require('node:process');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  const beforeMemory = memoryUsage();
  const start = performance.now();

  // console.log(fib(parseInt(line, 10)));

  const n = parseInt(line.toString().split(' ')[0]);
  const m = parseInt(line.toString().split(' ')[1]);
  console.log(
    'RESULT: ',
    fastMatrixExponentiation(
      [
        [1, 1],
        [1, 0],
      ],
      n,
      m,
    ),
  );
  console.log('--------------------------------------');

  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed()} ms. ${((end - start) / 1000).toFixed()} sec.`);

  const afterMemory = memoryUsage();
  const bytes = afterMemory.rss - beforeMemory.rss;
  const kb = bytes / 1024;
  const mb = (kb / 1024).toFixed(2);
  console.log('Memory: ', kb, 'Kb. ', mb, 'Mb.');

  process.exit();
}

// ********************************************************************
// n-ое число последовательности Фибоначчи.
function fib(n) {
  if (n <= 1) return n;
  let a = 0n;
  let b = 1n;
  let result = 0n;
  for (let i = 1; i < n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}
// ********************************************************************

// ********************************************************************
// Последняя цифра n-ого числа последовательности Фибоначчи.
// Используем bigint, т.к. большие числа не поместятся в number.
function lastDigitOfFid1(n) {
  if (n <= 1) return n;
  let a = 0n;
  let b = 1n;
  let result = 0n;
  for (let i = 1; i < n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return Number(result % 10n);
}
// ********************************************************************

// ********************************************************************
// Последняя цифра n-ого числа последовательности Фибоначчи.
// Десятки нам не нужны, поэтому result делим на каждом шаге.
// В итоге выигрываем и по памяти и по времени.
function lastDigitOfFid2(n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  let result = 0;
  for (let i = 1; i < n; i++) {
    result = (a + b) % 10;
    a = b;
    b = result;
  }
  return result;
}
// ********************************************************************

// ********************************************************************
// Найти остаток от деления на m для n-ого числа фибоначчи.
function getFibMod(n, m) {
  const periodLength = getPisanoPeriod(m);
  // Находим длину незаконченного периода.
  const incompletePeriod = n % periodLength;
  // Теперь нужно найти число фибоначчи, порядковый номер которого равен incompletePeriod.
  if (incompletePeriod <= 1) return incompletePeriod;
  let a = 0;
  let b = 1;
  let result = 0;
  for (let i = 1; i < incompletePeriod; i++) {
    result = (a + b) % m;
    a = b;
    b = result;
  }
  return result;
}
// Находим период Пизано с которым повторяется остаток от деления на m.
function getPisanoPeriod(mod) {
  let current = 0;
  let next = 1;
  let period = 0;
  while (true) {
    let oldNext = next;
    next = (current + next) % mod;
    current = oldNext;
    period += 1;
    if (current === 0 && next === 1) return period;
  }
}
// ********************************************************************

// ********************************************************************
// Возведение матрицы в степень.
function fastMatrixExponentiation(matrix, power, mod) {
  if (power === 0) {
    return [[]]; // the 2x2 identity matrix
  }
  if (power % 2 === 0) {
    const z = fastMatrixExponentiation(matrix, power / 2, mod);
    return multiply2x2Matrices(z, z, mod);
  } else {
    const z = fastMatrixExponentiation(matrix, (power - 1) / 2, mod);
    const y = multiply2x2Matrices(z, z, mod);
    return multiply2x2Matrices(y, matrix, mod);
  }
}
// Умножаем матрицу a на матрицу b и берём модуль m.
function multiply2x2Matrices(a, b, m) {
  return [
    [(a[0][0] * b[0][0] + a[0][1] * b[1][0]) % m, (a[0][0] * b[0][1] + a[0][1] * b[1][1]) % m],
    [(a[1][0] * b[0][0] + a[1][1] * b[1][0]) % m, (a[1][0] * b[0][1] + a[1][1] * b[1][1]) % m],
  ];
}
// ********************************************************************

// ************************** START ***************************
// Модуль m n-ого числа фибоначчи при помощи возведения матрицы в степень.
function fib(n, m) {
  const matrix = [
    [1, 1],
    [1, 0],
  ];
  return fastMatrixExponentiation(matrix, n, m)[0][1];
}
function fastMatrixExponentiation(D, n, m) {
  if (n === 0) {
    // Возвращаем 2x2 единичную матрицу
    return [
      [1, 0],
      [0, 1],
    ];
  }

  let Z;
  if (n % 2 === 0) {
    Z = fastMatrixExponentiation(D, n / 2, m);
    return multiply2x2Matrices(Z, Z, m);
  } else {
    Z = fastMatrixExponentiation(D, (n - 1) / 2, m);
    const Y = multiply2x2Matrices(Z, Z, m);
    return multiply2x2Matrices(Y, D, m);
  }
}

function multiply2x2Matrices(A, B, m) {
  const C11 = (A[0][0] * B[0][0] + A[0][1] * B[1][0]) % m;
  const C12 = (A[0][0] * B[0][1] + A[0][1] * B[1][1]) % m;
  const C21 = (A[1][0] * B[0][0] + A[1][1] * B[1][0]) % m;
  const C22 = (A[1][0] * B[0][1] + A[1][1] * B[1][1]) % m;
  return [
    [C11, C12],
    [C21, C22],
  ];
}
// *************************** END ****************************

// ************************** START ***************************
// Получаем последнюю цифру суммы чисел фибоначчи.
// Обрати внимание, что используем формулу Fsum = (Fn+2)-1.
// Так как нужна только последняя цифра, всегда передаём m=10.
function fibSum(n, m) {
  const matrix = [
    [1, 1],
    [1, 0],
  ];
  const result = fastMatrixExponentiation(matrix, n + 2, m)[0][1];
  if (n > 0 && result === 0) {
    return 9;
  } else {
    return result - 1;
  }
}
// *************************** END ****************************

// ************************** START ***************************
// Последняя цифра суммы чисел фибоначчи от Fx1 до Fx2.
function fibRange(x1, x2) {
  const period = getPisanoPeriod(10);
  const a = fibSum((x1 - 1) % period, 10);
  const b = fibSum(x2 % period, 10) + 10; // Прибавляем 10, чтобы корректно посчитать разницу двух чисел.
  return Math.abs(b - a) % 10;
}
// *************************** END ****************************
