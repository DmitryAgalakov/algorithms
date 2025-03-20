const { memoryUsage } = require('node:process');

// Создаёт двумерный массив.
function createTwodimArr(n, m) {
  let R = Array.from({ length: n + 1 }, () => Array(m + 1).fill(null));
  R[0][0] = '—';
  return R;
}

/*
ДАНО:
Есть две горки с камнями. Есть два игрока. 
Игроки ходят по очереди. Начинает ходить первый игрок.
За ход каждый игрок может выбрать одно из трёх действий:
Взять один камень с левой горки. Взять один камень с правой горки. 
Взять по одному камню с каждой горки.

ВХОДНЫЕ ДАННЫЕ:
n — размер первой горки. m — размер второй горки.

ЦЕЛЬ АЛГОРИТМА:
Определить победит ли первый игрок, если второй игрок ходит безошибочно.

КЛЮЧ:
Игрок 1 проиграет в тех случаях, когда слева, по диагонали слева и сверху стоит "W".
*/

function rocks(n, m) {
  let R = createTwodimArr(n, m);

  // Заполняем самый левый столбец матрицы.
  for (let i = 1; i < n + 1; i++) {
    if (R[i - 1][0] === 'W') {
      R[i][0] = 'L';
    } else {
      R[i][0] = 'W';
    }
  }
  // Заполняем верхнюю строку матрицы.
  for (let i = 1; i < m + 1; i++) {
    if (R[0][i - 1] === 'W') {
      R[0][i] = 'L';
    } else {
      R[0][i] = 'W';
    }
  }
  // Заполняем остальную часть матрицы.
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (R[i - 1][j - 1] === 'W' && R[i][j - 1] === 'W' && R[i - 1][j] === 'W') {
        R[i][j] = 'L';
      } else {
        R[i][j] = 'W';
      }
    }
  }
  console.log('1 player is: ', R[n][m]);
}

function measureMemoryUsage() {
  const beforeMemory = memoryUsage();

  // Вызов функции
  rocks(0, 2);

  const Mb = 1048576;

  const afterMemory = memoryUsage();

  console.log('Memory Usage Before:');
  console.log(`RSS: ${beforeMemory.rss / Mb} Mb`);
  console.log(`Heap Total: ${beforeMemory.heapTotal / Mb} Mb`);
  console.log(`Heap Used: ${beforeMemory.heapUsed / Mb} Mb`);
  console.log(`---------------`);

  console.log('Memory Usage After:');
  console.log(`RSS: ${afterMemory.rss / Mb} Mb`);
  console.log(`Heap Total: ${afterMemory.heapTotal / Mb} Mb`);
  console.log(`Heap Used: ${afterMemory.heapUsed / Mb} Mb`);
}

measureMemoryUsage();
