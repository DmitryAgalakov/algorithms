let i = 0;
function hanoi(n, from, to) {
  if (n === 1) {
    console.log(`${++i}. From ${from} to ${to}`);
    return;
  }
  const unused = 6 - from - to;
  hanoi(n - 1, from, unused);
  console.log(`${++i}. From ${from} to ${to}`);
  hanoi(n - 1, unused, to);
}

hanoi(6, 1, 3);
