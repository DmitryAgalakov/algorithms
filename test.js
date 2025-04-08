function test(a, b) {
  getMemoryUsage();

  //   const points = Array.from({ length: 5_000_000 }, () => ({
  //     x: Math.random(),
  //     y: Math.random(),
  //   }));

  //   const points = Array.from({ length: 5000000 }, () => [Math.random(), Math.random()]);

  const points = new Float32Array(5000000 * 2); // Умножаем на 2, так как каждая точка имеет x и y

  for (let i = 0; i < points.length; i += 2) {
    points[i] = Math.random(); // x
    points[i + 1] = Math.random(); // y
  }
  console.log(points);
  function getMemoryUsage() {
    const used = process.memoryUsage().heapUsed;
    console.log(`Memory used: ${(used / 1024 / 1024).toFixed(2)} MB`);
  }
  getMemoryUsage();
}
test();
