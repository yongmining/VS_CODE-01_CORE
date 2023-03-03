/* Symbol 타입
   ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
   다른 값과 중복되지 않는 유일한 값으로 이를 충돌 위험이 없는 객체의 유일한 프로퍼티 키를 만들 때 사용한다.
*/ 

var key = Symbol('key');
console.log(key);
console.log(typeof key);

//객체 생성
var obj = {};
obj[key] = 'value';
console.log(obj[key]);