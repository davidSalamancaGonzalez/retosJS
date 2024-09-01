function fibonazzi(n) {
  let fibo = [];
  for (let i = 0; i < n; i++) {
    fibo.push(i);
    if (fibo[i] > 1) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  }
  return fibo;
}

console.log(fibonazzi(50));

