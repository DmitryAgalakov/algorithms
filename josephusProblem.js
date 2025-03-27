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

    console.log('RESULT: ', josephusProblem2(n, m));

    const finalMemory = process.memoryUsage().heapUsed;
    const end = performance.now();
    console.log(`Memory used: ${Number(((finalMemory - initialMemory) / 1024 / 1024).toFixed(4))} MB`);
    console.log(`Execution time: ${Number((end - start).toFixed(2))} milliseconds`);

    process.exit();
  }
}

function josephusProblem(n, k) {
  return n === 0 ? 0 : (josephusProblem(n - 1, k) + k) % n;
}

function josephusProblem2(n, k) {
  let x = 0;
  for (let i = 1; i < n + 1; i++) {
    x = (x + k) % i;
  }
  return x;
}

// Работает не правильно.
function josephusProblem3(n, k) {
  let killedCount = 0;
  let lastKilled = 0;
  let i = k;
  while (killedCount !== n) {
    killedCount++;
    lastKilled = i;
    i += k;
    if (i > n) {
      i = i - n;
    }
  }
  return lastKilled;
}
