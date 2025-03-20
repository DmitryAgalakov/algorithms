/*
LCM — Least Common Multiple.
Найти наименьшее общее кратное двух чисел.
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

    console.log('RESULT: ', lcm(n, m));

    const finalMemory = process.memoryUsage().heapUsed;
    const end = performance.now();
    console.log(`Memory used: ${Number(((finalMemory - initialMemory) / 1024 / 1024).toFixed(4))} MB`);
    console.log(`Execution time: ${Number((end - start).toFixed(2))} milliseconds`);

    process.exit();
  }
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
