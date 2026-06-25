// Question: Write a function calculate(a, b, operation) that accepts two numbers and a callback function.

const x = 10;
const y = 20;

function add(l,m){
  return l+m;
}

function subtract(l,m){
  return l-m;
}

function multiply(l,m){
  return l*m
}

function calculate(a,b,func){
console.log(func(a,b));
}

calculate(x,y,multiply)