/* 옵셔널 체이닝 연산자
   ES11에서 도입된 연산자로 좌항의 피연산자가 null또는 underfined 인 경우  underfined를 반환하고
   그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
*/

var obj = null;

// var value = obj && obj.value;
var value = obj?.value;

console.log(value);

var str = '';


// var len = str && str.length;
var len = str?.length;

console.log(len);