// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
  rl.on('line', readLine);
});

function readLine(line) {
  const arr = line.toString().split(' ').map(Number);

  console.log(max(arr));
  process.exit();
}
// Нужно найти произведение наибольших двух чисел в массиве.
function max(arr) {
  let max1 = -1;
  let max2 = -1;

  if (arr.length < 2) return arr[0] ?? 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return max1 * max2;
}

/*
Ещё можно так. Не хранить два числа в переменных, а проверять произведение.
MaxPairwiseProductNaive(A[1…n]):
    product ← 0
    for i from 1 to n:
        for j from i + 1 to n:
            product ← max(product, A[i] ⋅ A[j])
    return product
*/
module.exports = max;
