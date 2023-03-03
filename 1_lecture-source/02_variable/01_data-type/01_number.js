/* 자바스크리브 (ES6 기준)는 7개의 데이터 타입을 제공한다. */
/* 숫자 타입
   자바스크립트는 정수, 실수를 구분하지 않고 하나의 숫자 타입만 존재한다. 
    모든 수를 실수로 처리한다.
*/
var integer = 10;
var double =5.5;
var negative = -10;

console.log(10 === 10.0);
console.log(10 / 4); 

/* 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다. 
   Infinity : 양의 무한대 수
   -Infinity : 음의 무한대 수
   NaN : 산술 연산이 가능한 숫자가 아니라는 의미(Not a Number)
*/
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * "문자열");