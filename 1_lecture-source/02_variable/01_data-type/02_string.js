/* 문자열 타입
   자바스크립트는 문자와 문자열을 구분하지 않는다.
   문자열 리터럴은 따옴표(''), 큰따옴표(""), 백틱(``) 이다.
    자바스크립트의 문자열은 원시 타입이다. 변경 불가능한 값이다.
*/

var string;
string = 'JavaScript';
string = "JavaScript";
string = `JavaScript`;

string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표는"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표는'는 문자열로 인식";

string = '<h1 align="center">hello world<h1>';

/* 템플릿 리터럴
   ES6부터 도입 된 멀티 라인 문자열이다.
   표현식 삽입 등 편리한 문자열 처리 기능을 제공하는 문자열 표기법이다.
*/

var str = '안녕하세요\n반갑습니다';
var multiline = `안녕하세요
반갑습니다`;
console.log(multiline);

var lastName ='홍';
var firstName ='길동';

console.log('제 이름은 ' + lastName + firstName + '입니다.');

console.log(`제 이름은 ${lastName}${firstName}입니다.`);

console.log('제 이름은 ${lastName}${firstName}입니다.');