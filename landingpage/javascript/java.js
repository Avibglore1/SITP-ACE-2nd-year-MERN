function multiply(a, b, callback) {
  const result = a * b;
  callback(result);
}

multiply(4, 5, function (answer) {
  console.log(answer);
});