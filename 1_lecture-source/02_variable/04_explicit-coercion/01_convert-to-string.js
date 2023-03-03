//1. String 생성자함수를 new 연산자 없이 호출
console.log(typeof String(10));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));

//2. Object.prototype.toString 메소드 사용
console.log(typeof (10).toString());
console.log(NaN.toString());
console.log(Infinity.toString());
console.log(true.toString());