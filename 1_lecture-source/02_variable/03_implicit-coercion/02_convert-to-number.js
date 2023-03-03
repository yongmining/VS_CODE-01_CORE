console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
var test = 10;
console.log(test++ + +'20');

console.log(10 > '5');

console.log(10 % 'javascript');

// + 단항연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(typeof+'');
console.log(+'1');
console.log(+'JavaScript');
console.log(+true);
console.log(+false);

console.log(+null);
console.log(+undefined);

// console.log(+Symbol());

console.log(+{});
console.log(+[]);
console.log(+[1, 2, 3]);
console.log(+function() {});
