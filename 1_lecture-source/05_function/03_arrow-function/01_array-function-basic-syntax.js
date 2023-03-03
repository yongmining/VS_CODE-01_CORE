/* 화살표 함수
   ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표를 사용해 
   좀 더 간결한 방법으로 함수를 선언할 수 있도록 추가된 문법이다.
   화살표 함수는 항상 익명 함수 형태로 정의하며,
   본문이 한 줄인 함수를 작성할 때 유용하다.
*/

var message = function() {
    return 'hello world';
};

console.log(message());

var arrowFunction = () => {
    return 'arrow function';
};

console.log(arrowFunction());

//명령문이 하나만 있는 경우 중괄호 생략 가능
//이 때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식이라면 
//암묵적으로 return값으로 취급한다.
var arrowFunction2 = () => 'arrow function2';

console.log(arrowFunction2());

var arrowFunction3 = (val1, val2) => `arrow function : ${ val1 + val2 }`;
console.log(arrowFunction3(10, 20));

//매개변수가 한 개 이면 소괄호 생략 가능
//단, 매개변수가 없거나 여러 개 인 경우 괄호 생략 불가
var arrowFunction4 = value => `hello ${value}`;
console.log(arrowFunction4('world'));