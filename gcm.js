/*
GCD — Greatest Common Divisor.
Найти наибольший общий делитель двух чисел.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  if (line !== '\n') {
    const n = parseInt(line.toString().split(' ')[0], 10);
    const m = parseInt(line.toString().split(' ')[1], 10);

    const start = performance.now();
    const initialMemory = process.memoryUsage().heapUsed;

    console.log('RESULT: ', gcd3(n, m));

    const finalMemory = process.memoryUsage().heapUsed;
    const end = performance.now();
    console.log(`Memory used: ${Number(((finalMemory - initialMemory) / 1024 / 1024).toFixed(4))} MB`);
    console.log(`Execution time: ${Number((end - start).toFixed(2))} milliseconds`);

    process.exit();
  }
}

// ************************** START *************************
// Наивынй алгоритм.
function gcd(a, b) {
  let i = a < b ? a : b;
  while (i > 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    i--;
  }
  return 1;
}
// ************************** END ***************************

// ************************** START *************************
function gcd2(a, b) {
  while (a > 0 && b > 0) {
    if (a >= b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a > b ? a : b;
}
// ************************** END ***************************

// ************************** START *************************
function gcd3(a, b) {
  while (a > 0 && b > 0) {
    if (a >= b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a > b ? a : b;
}
// ************************** END ***************************
