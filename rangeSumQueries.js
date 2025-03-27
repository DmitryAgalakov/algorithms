const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Введите массив целых чисел: ', (numbers) => {
  const arr = numbers.split(' ').map(Number);

  rl.question('Введите количество диапазонов: ', (rangesCount) => {
    const ranges = [];
    let count = 0;

    const askRange = () => {
      if (count < rangesCount) {
        rl.question(`Введите диапазон номер ${count + 1}: `, (range) => {
          ranges.push(range.split(' ').map(Number));
          count++;
          askRange();
        });
      } else {
        console.log('RESULT:', calc(arr, ranges));
        rl.close();
      }
    };

    askRange();
  });
});

function calc(arr, ranges) {
  const results = [];

  return results;
}
