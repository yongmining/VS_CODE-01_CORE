/* var
   ES5까지 변수를 선언하는 유일한 방법이 var 키워드를 이용하는 것이었다.
   var 키워드는 몇 가지 문제를 발생시킬 가능성이 존재한다.
*/

// 1. 변수 중복 선언 허용
var msg = '안녕하세요';
console.log(msg);

// var 키워드로 선언된 변수는 스코프 내에서 중복 선언이 허용된다.
// 초기화문이 있는 변수의 선언문은 자바스크립트 엔진에 의해 초기화된다.
var msg = '안녕히가세요';
console.log(msg);

message = '헬로우';
console.log(message);

// 초기화문이 없는 변수 선언문은 무시된다.
var msg;
console.log(msg);

// 2. 함수 레벨 스코프
for(var i = 0; i < 10; i++) {}

console.log(i);

// 3. 변수 호이스팅
console.log(test);
test = '반갑습니다';
console.log(test);
var test;       //변수 선언은 런타임 시 암묵적으로 실행된다.